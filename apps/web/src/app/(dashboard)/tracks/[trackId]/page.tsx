"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTrackTree } from "@/hooks/useTracks";
import { Loader2 } from "lucide-react";

interface Props {
  params: Promise<{ trackId: string }>;
}

export default function TrackOverviewPage({ params }: Props) {
  const { trackId } = use(params);
  const router = useRouter();
  const { data, isLoading, error } = useTrackTree(trackId);

  useEffect(() => {
    if (isLoading) return;
    
    if (error || !data) {
      router.replace("/tracks");
      return;
    }

    const firstCatId = data.categories?.[0]?.id;
    if (firstCatId) {
      router.replace(`/tracks/${trackId}/${firstCatId}`);
    } else {
      router.replace("/tracks");
    }
  }, [data, isLoading, error, trackId, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-3 text-text-muted">
      <Loader2 className="w-8 h-8 animate-spin text-accent-blue" />
      <p className="text-sm font-medium animate-pulse">Entering Study Track...</p>
    </div>
  );
}
