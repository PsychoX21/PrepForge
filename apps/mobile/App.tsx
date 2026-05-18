import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView, WebViewNavigation } from 'react-native-webview';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function App() {
  // ─── CONNECTION CONFIGURATION ──────────────────────────────────────────────
  // Store connection target. Default to our production deployment URL
  const [serverUrl, setServerUrl] = useState<string>('https://prepforge.vercel.app');
  const [isConfigured, setIsConfigured] = useState<boolean>(false);
  const [customInput, setCustomInput] = useState<string>('');
  
  // WebView state tracking
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [canGoBack, setCanGoBack] = useState<boolean>(false);
  const [canGoForward, setCanGoForward] = useState<boolean>(false);
  
  const webViewRef = useRef<WebView>(null);

  // ─── HANDLERS ──────────────────────────────────────────────────────────────
  const selectPresetUrl = (url: string) => {
    setServerUrl(url);
    setIsConfigured(true);
    setIsLoading(true);
    setHasError(false);
  };

  const submitCustomUrl = () => {
    let formatted = customInput.trim();
    if (!formatted) return;
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = 'http://' + formatted; // Default to http for dev testing
    }
    setServerUrl(formatted);
    setIsConfigured(true);
    setIsLoading(true);
    setHasError(false);
  };

  const handleNavigationStateChange = (navState: WebViewNavigation) => {
    setCanGoBack(navState.canGoBack);
    setCanGoForward(navState.canGoForward);
    // If the page finished loading successfully
    if (!navState.loading) {
      setIsLoading(false);
    }
  };

  const triggerReload = () => {
    setHasError(false);
    setIsLoading(true);
    webViewRef.current?.reload();
  };

  const triggerGoBack = () => {
    if (canGoBack) {
      webViewRef.current?.goBack();
    }
  };

  const triggerGoForward = () => {
    if (canGoForward) {
      webViewRef.current?.goForward();
    }
  };

  const resetServerConfig = () => {
    setIsConfigured(false);
    setIsLoading(true);
    setHasError(false);
  };

  // ─── RENDERERS ─────────────────────────────────────────────────────────────

  // Configuration Setup Screen (Glassmorphic Selection Screen)
  if (!isConfigured) {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar style="light" />
        <View style={styles.setupContainer}>
          {/* Glowing Brand Header */}
          <View style={styles.brandContainer}>
            <Text style={styles.logoText}>PREPFORGE</Text>
            <Text style={styles.logoSubtitle}>Mobile Cross-Platform Transpiler</Text>
          </View>

          {/* Connection Guide */}
          <View style={styles.glassPanel}>
            <Text style={styles.sectionHeader}>Select Connection Target</Text>
            <Text style={styles.panelSubtitle}>
              Connect seamlessly to your running Web workspace to synchronize all progress, streaks, chats, and heatmaps in real-time.
            </Text>

            {/* Presets */}
            <TouchableOpacity
              style={[styles.presetButton, { borderColor: '#39ff14' }]}
              onPress={() => selectPresetUrl('https://prepforge.vercel.app')}
            >
              <Text style={styles.presetEmoji}>🚀</Text>
              <View style={styles.presetTextWrapper}>
                <Text style={styles.presetTitle}>Production Cloud Server</Text>
                <Text style={styles.presetDesc}>https://prepforge.vercel.app</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.presetButton, { borderColor: '#00F0FF' }]}
              onPress={() => selectPresetUrl('http://localhost:4000')}
            >
              <Text style={styles.presetEmoji}>💻</Text>
              <View style={styles.presetTextWrapper}>
                <Text style={styles.presetTitle}>Local Dev Server (iOS Sim)</Text>
                <Text style={styles.presetDesc}>http://localhost:4000</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.presetButton, { borderColor: '#A020F0' }]}
              onPress={() => selectPresetUrl('http://10.0.2.2:4000')}
            >
              <Text style={styles.presetEmoji}>🤖</Text>
              <View style={styles.presetTextWrapper}>
                <Text style={styles.presetTitle}>Local Dev Server (Android Sim)</Text>
                <Text style={styles.presetDesc}>http://10.0.2.2:4000 (Host Loopback)</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Custom URL Input Panel */}
          <View style={styles.glassPanel}>
            <Text style={styles.inputLabel}>Custom Workstation IP / Address</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.textInput}
                placeholder="e.g. 192.168.1.105:4000"
                placeholderTextColor="#556080"
                value={customInput}
                onChangeText={setCustomInput}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
              />
              <TouchableOpacity style={styles.connectButton} onPress={submitCustomUrl}>
                <Text style={styles.connectButtonText}>Connect</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar style="light" />

      {/* Main Web Transpiler Shell */}
      <View style={styles.webContainer}>
        <WebView
          ref={webViewRef}
          source={{ uri: serverUrl }}
          onNavigationStateChange={handleNavigationStateChange}
          onLoadProgress={({ nativeEvent }) => setLoadingProgress(nativeEvent.progress)}
          onError={() => setHasError(true)}
          style={hasError ? { display: 'none' } : { flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          allowsBackForwardNavigationGestures={true}
          userAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1 PrepForgeMobileWrapper"
        />

        {/* ─── OVERLAYS & CONTROLS ───────────────────────────────────────────── */}

        {/* Beautiful Loading Overlay with Custom Percent Indicator */}
        {isLoading && !hasError && (
          <View style={styles.overlayBg}>
            <View style={styles.loaderContainer}>
              <Text style={styles.loaderIcon}>⚡</Text>
              <Text style={styles.loaderHeader}>PREPFORGE HACKER STATION</Text>
              <Text style={styles.loaderSubtitle}>Synchronizing Web Frame...</Text>
              
              {/* Spinner */}
              <ActivityIndicator size="large" color="#00F0FF" style={{ marginVertical: 16 }} />

              {/* Progress bar */}
              <View style={styles.loaderProgressBg}>
                <View style={[styles.loaderProgressFill, { width: `${loadingProgress * 100}%` }]} />
              </View>
              <Text style={styles.dimmedText}>
                {Math.round(loadingProgress * 100)}% Loaded
              </Text>
            </View>
          </View>
        )}

        {/* Offline / Connection Error Screen */}
        {hasError && (
          <View style={styles.overlayBg}>
            <View style={styles.loaderContainer}>
              <Text style={styles.errorIcon}>❌</Text>
              <Text style={styles.errorHeader}>CONNECTION OFFLINE</Text>
              <Text style={styles.errorSubtitle}>
                Could not reach the workstation at: {'\n'}
                <Text style={styles.neonText}>{serverUrl}</Text>
              </Text>
              <Text style={styles.errorTip}>
                Please ensure your local Next.js workspace is running (`npm run dev`) and your device is on the same local network.
              </Text>

              <View style={styles.errorActionsRow}>
                <TouchableOpacity style={styles.errorBtn} onPress={triggerReload}>
                  <Text style={styles.errorBtnText}>🔄 Retry Sync</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.errorBtn, styles.errorBtnSecondary]} onPress={resetServerConfig}>
                  <Text style={styles.errorBtnText}>⚙️ Setup Config</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* Translucent Floating Glassmorphic Browser Navigation Bar */}
        <View style={styles.glassNavigationNavbar}>
          <TouchableOpacity
            style={[styles.navBtn, !canGoBack && styles.navBtnDisabled]}
            disabled={!canGoBack}
            onPress={triggerGoBack}
          >
            <Text style={styles.navBtnText}>◀</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navBtn, !canGoForward && styles.navBtnDisabled]}
            disabled={!canGoForward}
            onPress={triggerGoForward}
          >
            <Text style={styles.navBtnText}>▶</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navBtn} onPress={triggerReload}>
            <Text style={styles.navBtnText}>🔄</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.navBtn, styles.navBtnSettings]} onPress={resetServerConfig}>
            <Text style={styles.navBtnText}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// ─── STYLING SYSTEM (PREMIUM GLASSMORPHIC TRANSPILER SHELL) ──────────────────
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#05070f', // Deep Space Background
  },
  setupContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  brandContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 4,
    // iOS shadow
    shadowColor: '#00F0FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  logoSubtitle: {
    fontSize: 12,
    color: '#556080',
    marginTop: 4,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  glassPanel: {
    backgroundColor: '#080d1a',
    borderWidth: 1,
    borderColor: '#131e35',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
    marginBottom: 4,
  },
  panelSubtitle: {
    fontSize: 11,
    color: '#556080',
    lineHeight: 16,
    marginBottom: 16,
  },
  presetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0c1224',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  presetEmoji: {
    fontSize: 22,
    marginRight: 12,
  },
  presetTextWrapper: {
    flex: 1,
  },
  presetTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
  },
  presetDesc: {
    fontSize: 10,
    color: '#556080',
    marginTop: 2,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9ca3af',
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#040710',
    borderWidth: 1,
    borderColor: '#131e35',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    color: '#fff',
    fontSize: 13,
  },
  connectButton: {
    backgroundColor: '#00F0FF',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  connectButtonText: {
    color: '#05070f',
    fontWeight: 'bold',
    fontSize: 13,
  },
  webContainer: {
    flex: 1,
    position: 'relative',
  },
  overlayBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#05070f',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  loaderContainer: {
    alignItems: 'center',
    width: '100%',
  },
  loaderIcon: {
    fontSize: 44,
    color: '#00F0FF',
    marginBottom: 12,
  },
  loaderHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 2,
  },
  loaderSubtitle: {
    fontSize: 12,
    color: '#556080',
    marginTop: 4,
  },
  loaderProgressBg: {
    width: SCREEN_WIDTH - 96,
    height: 6,
    backgroundColor: '#162035',
    borderRadius: 3,
    overflow: 'hidden',
    marginTop: 16,
    marginBottom: 8,
  },
  loaderProgressFill: {
    height: '100%',
    backgroundColor: '#00F0FF',
    borderRadius: 3,
  },
  dimmedText: {
    fontSize: 11,
    color: '#556080',
  },
  errorIcon: {
    fontSize: 44,
    marginBottom: 12,
  },
  errorHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff4d4d',
    letterSpacing: 2,
  },
  errorSubtitle: {
    fontSize: 12,
    color: '#d1d5db',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 18,
  },
  neonText: {
    color: '#00F0FF',
    fontWeight: 'bold',
  },
  errorTip: {
    fontSize: 11,
    color: '#556080',
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 16,
    paddingHorizontal: 12,
  },
  errorActionsRow: {
    flexDirection: 'row',
    marginTop: 24,
  },
  errorBtn: {
    backgroundColor: '#006241',
    borderWidth: 1,
    borderColor: '#39ff14',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 8,
  },
  errorBtnSecondary: {
    backgroundColor: '#162035',
    borderColor: '#556080',
  },
  errorBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  glassNavigationNavbar: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
    height: 56,
    backgroundColor: 'rgba(10, 15, 29, 0.85)',
    borderWidth: 1,
    borderColor: 'rgba(0, 240, 255, 0.2)',
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
    // Android Shadow
    elevation: 8,
    // iOS Shadow
    shadowColor: '#00F0FF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
  },
  navBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBtnDisabled: {
    opacity: 0.25,
  },
  navBtnSettings: {
    borderWidth: 1,
    borderColor: 'rgba(0, 240, 255, 0.3)',
    backgroundColor: 'rgba(0, 240, 255, 0.05)',
  },
  navBtnText: {
    color: '#00F0FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
