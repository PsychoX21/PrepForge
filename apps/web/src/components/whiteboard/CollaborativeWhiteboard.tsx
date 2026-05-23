"use client";

/**
 * CollaborativeWhiteboard component — real-time shared drawing board.
 * Supports mouse/touch inputs, responsive high-DPI scaling, pencil/eraser tools,
 * color palettes, brush sizes, and real-time Socket.io synchronization.
 */
import { useEffect, useRef, useState, useCallback } from "react";
import { useSocket } from "@/hooks";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Eraser, 
  Pencil, 
  Trash2, 
  X, 
  Palette, 
  Loader2,
  Download
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CollaborativeWhiteboardProps {
  itemId: string;
  itemName: string;
  onClose: () => void;
}

interface StrokeData {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  size: number;
  isEraser: boolean;
}

const COLORS = [
  { name: "White", value: "#ffffff" },
  { name: "Neon Blue", value: "#60a5fa" },
  { name: "Neon Green", value: "#4ade80" },
  { name: "Neon Purple", value: "#c084fc" },
  { name: "Neon Orange", value: "#f97316" },
  { name: "Neon Red", value: "#f87171" }
];

const BRUSH_SIZES = [
  { label: "Fine", value: 2 },
  { label: "Medium", value: 4 },
  { label: "Thick", value: 8 },
  { label: "Bold", value: 16 }
];

export default function CollaborativeWhiteboard({ itemId, itemName, onClose }: CollaborativeWhiteboardProps) {
  const { isConnected, emit, on } = useSocket();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const [color, setColor] = useState("#60a5fa"); // default blue neon
  const [brushSize, setBrushSize] = useState(4);
  const [tool, setTool] = useState<"pencil" | "eraser">("pencil");
  const [isLoading, setIsLoading] = useState(true);
  
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef({ x: 0, y: 0 });

  // Draw a single line segment on the context
  const drawSegment = useCallback((
    ctx: CanvasRenderingContext2D,
    stroke: StrokeData
  ) => {
    ctx.beginPath();
    ctx.moveTo(stroke.x1, stroke.y1);
    ctx.lineTo(stroke.x2, stroke.y2);
    ctx.strokeStyle = stroke.isEraser ? "#0d1117" : stroke.color; // matches dark background color
    ctx.lineWidth = stroke.size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    // If eraser is active, we use globalCompositeOperation destination-out to erase transparently
    // but drawing in background color (#0d1117) is simpler and fully matches our canvas theme
    ctx.globalCompositeOperation = stroke.isEraser ? "destination-out" : "source-over";
    
    ctx.stroke();
  }, []);

  // Set up canvas sizing and high-DPI context scale
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    // Save current canvas drawings before resizing to keep them!
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext("2d");
    if (tempCtx) {
      tempCtx.drawImage(canvas, 0, 0);
    }
    
    // Set display/css size
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    // Scale context back to normal pixels
    ctx.scale(dpr, dpr);
    
    // Set background fill to transparent so canvas theme matches current container
    ctx.clearRect(0, 0, rect.width, rect.height);
    
    // Restore previous drawings
    if (tempCtx) {
      ctx.drawImage(tempCanvas, 0, 0, rect.width, rect.height);
    }
  }, []);

  // Handle pointer coordinates conversion from page/mouse client to canvas client
  const getCoordinates = (e: MouseEvent | TouchEvent): { x: number; y: number } | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    
    let clientX = 0;
    let clientY = 0;
    
    if ("touches" in e) {
      if (e.touches.length === 0) return null;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    // Return relative point to canvas container
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  // ─── WebSocket Listeners ───────────────────────────────────────────────
  useEffect(() => {
    if (!isConnected) return;

    // 1. Join the whiteboard room
    emit("whiteboard:join", { itemId });

    // 2. Load stroke history list
    const unsubscribeHistory = on("whiteboard:history", (data: any) => {
      if (data.itemId !== itemId) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height); // clear existing
      
      // Draw all historical strokes
      const strokes = data.strokes || [];
      strokes.forEach((stroke: StrokeData) => {
        drawSegment(ctx, stroke);
      });
      setIsLoading(false);
    });

    // 3. Listen for incoming draw stroke broadcast
    const unsubscribeDraw = on("whiteboard:draw", (data: any) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      drawSegment(ctx, data.stroke);
    });

    // 4. Listen for clear boards event
    const unsubscribeClear = on("whiteboard:clear", () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    return () => {
      unsubscribeHistory();
      unsubscribeDraw();
      unsubscribeClear();
    };
  }, [itemId, isConnected, emit, on, drawSegment]);

  // ─── Local Draw Loop ───────────────────────────────────────────────────
  
  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const coords = getCoordinates(e.nativeEvent);
    if (!coords) return;
    
    isDrawingRef.current = true;
    lastPosRef.current = coords;
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const coords = getCoordinates(e.nativeEvent);
    if (!coords) return;
    
    const stroke: StrokeData = {
      x1: lastPosRef.current.x,
      y1: lastPosRef.current.y,
      x2: coords.x,
      y2: coords.y,
      color: color,
      size: brushSize,
      isEraser: tool === "eraser"
    };
    
    // Draw locally immediately
    drawSegment(ctx, stroke);
    
    // Emit draw event to room
    emit("whiteboard:draw", { itemId, stroke });
    
    lastPosRef.current = coords;
  };

  const stopDrawing = () => {
    isDrawingRef.current = false;
  };

  // Clear whiteboard locally and globally
  const clearBoard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    emit("whiteboard:clear", { itemId });
  };

  // Download whiteboard sketch as a PNG image file
  const downloadSketch = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Create a temporary canvas with a dark background to make the white/neon strokes pop!
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = canvas.width;
    exportCanvas.height = canvas.height;
    const exportCtx = exportCanvas.getContext("2d");
    if (exportCtx) {
      exportCtx.fillStyle = "#0d1117"; // dark charcoal background theme
      exportCtx.fillRect(0, 0, canvas.width, canvas.height);
      exportCtx.drawImage(canvas, 0, 0);
      
      const url = exportCanvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = `whiteboard-${itemName.replace(/\s+/g, "-").toLowerCase()}.png`;
      a.click();
    }
  };

  // Handle window resizing and layout adjustment
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.96, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        className="w-full max-w-5xl h-[85vh] bg-[#0d1117] border border-border-default/80 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
      >
        {/* Header toolbar */}
        <div className="px-6 py-4 border-b border-border-default/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-bg-elevated/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-purple/10 flex items-center justify-center border border-accent-purple/20">
              <Palette className="w-4 h-4 text-accent-purple" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-[var(--font-outfit)] text-text-primary flex items-center gap-2">
                Shared Study Board
                <Badge variant="green" className="text-[10px] uppercase font-bold py-0.5 px-1.5">
                  <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse mr-1" /> LIVE
                </Badge>
              </h3>
              <p className="text-xs text-text-muted mt-0.5 truncate max-w-sm sm:max-w-md">
                Draw with peers on: <span className="text-text-secondary font-medium">{itemName}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <Button variant="ghost" size="sm" onClick={downloadSketch} className="text-text-secondary hover:text-text-primary text-xs flex items-center gap-1">
              <Download className="w-3.5 h-3.5" /> Save Image
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose} className="p-1 text-text-muted hover:text-text-primary">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Drawing canvas workspace area */}
        <div className="flex-1 relative overflow-hidden cursor-crosshair select-none bg-[#090d12]">
          {isLoading && isConnected && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-text-muted text-xs bg-[#090d12]/90">
              <Loader2 className="w-5 h-5 animate-spin text-accent-purple" />
              Synchronizing canvas sketch history...
            </div>
          )}
          
          {!isConnected && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 text-text-muted text-xs bg-[#090d12]/80">
              <Badge variant="destructive" className="animate-pulse">Disconnected</Badge>
              Reconnecting WebSockets gateway to enable real-time multiplayer drawing...
            </div>
          )}
          
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full h-full block"
          />
        </div>

        {/* Bottom controls panel */}
        <div className="px-6 py-4 border-t border-border-default/20 flex flex-col md:flex-row items-center justify-between gap-4 bg-bg-elevated/10">
          {/* Tools select: Pencil vs Eraser */}
          <div className="flex items-center gap-2">
            <Button 
              variant={tool === "pencil" ? "primary" : "secondary"} 
              size="sm"
              onClick={() => setTool("pencil")}
              className="flex items-center gap-1.5 text-xs"
            >
              <Pencil className="w-3.5 h-3.5" /> Pencil
            </Button>
            <Button 
              variant={tool === "eraser" ? "primary" : "secondary"} 
              size="sm"
              onClick={() => setTool("eraser")}
              className="flex items-center gap-1.5 text-xs"
            >
              <Eraser className="w-3.5 h-3.5" /> Eraser
            </Button>
          </div>

          {/* Color Palettes selection */}
          {tool === "pencil" && (
            <div className="flex items-center gap-2 border-l border-r border-border-default/20 px-4">
              <span className="text-[10px] text-text-muted uppercase font-bold mr-1.5">Color</span>
              <div className="flex items-center gap-2">
                {COLORS.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setColor(c.value)}
                    style={{ backgroundColor: c.value }}
                    className={`w-6 h-6 rounded-full border transition-all ${
                      color === c.value 
                        ? "scale-110 ring-2 ring-accent-purple/50 border-white" 
                        : "border-border-default/30 opacity-70 hover:opacity-100"
                    }`}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Brush Sizes */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-text-muted uppercase font-bold mr-1">Brush</span>
            <div className="flex items-center gap-1.5 bg-bg-elevated/40 p-1 rounded-lg border border-border-default/20">
              {BRUSH_SIZES.map((b) => (
                <button
                  key={b.value}
                  onClick={() => setBrushSize(b.value)}
                  className={`text-[10px] font-semibold py-1 px-2.5 rounded-md transition-colors ${
                    brushSize === b.value
                      ? "bg-bg-primary text-text-primary shadow-sm"
                      : "text-text-muted hover:text-text-secondary"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Clear board action */}
          <div className="flex items-center gap-3">
            <Button 
              variant="danger" 
              size="sm" 
              onClick={clearBoard}
              className="flex items-center gap-1 text-xs"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear All
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
