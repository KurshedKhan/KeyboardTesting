import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import HelpPanel from './components/HelpPanel.jsx';
import Keyboard from './components/Keyboard.jsx';
import KeyboardModeToggle from './components/KeyboardModeToggle.jsx';
import LayoutToggle from './components/LayoutToggle.jsx';
import MousePanel from './components/MousePanel.jsx';
import StatusPanel from './components/StatusPanel.jsx';
import { buildKeyLabelMap, layouts } from './data/keyboardLayouts.js';

const RECENT_LIMIT = 20;
const STUCK_AFTER_MS = 3000;

const mouseNames = {
  0: { code: 'MouseLeft', name: 'Left Click' },
  1: { code: 'MouseMiddle', name: 'Middle Click' },
  2: { code: 'MouseRight', name: 'Right Click' },
};

function friendlyKeyName(event, labelMap) {
  if (event.code === 'Space') return 'Space';
  if (labelMap.has(event.code)) return labelMap.get(event.code);
  if (event.key && event.key.length === 1) return event.key.toUpperCase();
  return event.key || event.code;
}

function createBeep() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;

  const context = new AudioContext();
  return () => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.value = 560;
    gain.gain.setValueAtTime(0.045, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.08);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.08);
  };
}

export default function App() {
  const [layoutType, setLayoutType] = useState('windows');
  const [keyboardMode, setKeyboardMode] = useState('full');
  const [activeKeys, setActiveKeys] = useState(() => new Map());
  const [stuckCodes, setStuckCodes] = useState(() => new Set());
  const [activeMouseButtons, setActiveMouseButtons] = useState(() => new Set());
  const [recentKeys, setRecentKeys] = useState([]);
  const [latest, setLatest] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [testedKeys, setTestedKeys] = useState(() => new Set());
  const soundRef = useRef(null);
  const lastKeyTime = useRef({});
  const activeKeysRef = useRef(activeKeys);

  // Keep the ref in sync with state
  useEffect(() => {
    activeKeysRef.current = activeKeys;
  }, [activeKeys]);

  const layout = layouts[layoutType];
  const labelMap = useMemo(() => buildKeyLabelMap(layout), [layout]);
  const activeCodes = useMemo(() => new Set(activeKeys.keys()), [activeKeys]);

  const addRecent = useCallback((item) => {
    const entry = { ...item, id: `${item.code}-${Date.now()}-${Math.random()}` };
    setLatest(item);
    setRecentKeys((current) => [entry, ...current].slice(0, RECENT_LIMIT));
  }, []);

  const playSound = useCallback(() => {
    if (!soundEnabled) return;
    if (!soundRef.current) {
      soundRef.current = createBeep();
    }
    soundRef.current?.();
  }, [soundEnabled]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const formTag = event.target?.tagName?.toLowerCase();
      if (['input', 'textarea', 'select'].includes(formTag) && !event.target?.dataset?.keyCapture) return;

      event.preventDefault();
      
      // Prevent duplicate events within 50ms
      const now = Date.now();
      const lastTime = lastKeyTime.current[event.code] || 0;
      if (now - lastTime < 50) return;
      lastKeyTime.current[event.code] = now;

      const name = friendlyKeyName(event, labelMap);
      const item = { code: event.code, name };

      if (!activeKeysRef.current.has(event.code)) {
        setActiveKeys((current) => {
          const next = new Map(current);
          next.set(event.code, Date.now());
          return next;
        });
        
        // Add to recent keys only once per key press
        const entry = { ...item, id: `${item.code}-${Date.now()}-${Math.random()}` };
        setLatest(item);
        setRecentKeys((current) => [entry, ...current].slice(0, RECENT_LIMIT));
        
        playSound();
        
        // Mark key as tested
        setTestedKeys((tested) => new Set(tested).add(event.code));
      }
    };

    // Handle special keys that might not trigger keydown properly
    const handleSpecialKeys = (event) => {
      const formTag = event.target?.tagName?.toLowerCase();
      if (['input', 'textarea', 'select'].includes(formTag) && !event.target?.dataset?.keyCapture) return;

      // Try to capture keys that OS might intercept
      const specialKeys = {
        'PrintScreen': 'PrtSc',
        'ScrollLock': 'ScrLk',
        'Pause': 'Pause',
        'Insert': 'Ins',
        'Delete': 'Del',
        'Home': 'Home',
        'End': 'End',
        'PageUp': 'PgUp',
        'PageDown': 'PgDn',
        'NumLock': 'NumLk',
        'CapsLock': 'Caps',
        'Sleep': 'Sleep',
        'WakeUp': 'Wake',
        'AppSelect': 'App',
        'Help': 'Help',
        'AudioVolumeMute': 'Mute',
        'AudioVolumeDown': 'Vol-',
        'AudioVolumeUp': 'Vol+',
        'MediaTrackPrevious': 'Prev',
        'MediaStop': 'Stop',
        'MediaPlayPause': 'Play',
        'MediaTrackNext': 'Next',
        'LaunchMediaPlayer': 'Music',
        'LaunchMail': 'Mail',
        'LaunchApp2': 'Calc',
        'LaunchExplorer': 'Files',
        'BrowserHome': 'Home',
        'BrowserSearch': 'Search',
        'BrowserFavorites': 'Fav',
        'BrowserRefresh': 'Refresh',
        'BrowserStop': 'Stop',
        'BrowserForward': 'Forward',
        'BrowserBack': 'Back'
      };

      const keyName = specialKeys[event.code] || specialKeys[event.key];
      
      if (keyName) {
        event.preventDefault();
        event.stopPropagation();
        
        const keyCode = event.code || event.key;
        const item = { code: keyCode, name: keyName };
        
        if (!activeKeysRef.current.has(keyCode)) {
          setActiveKeys((current) => {
            const next = new Map(current);
            next.set(keyCode, Date.now());
            return next;
          });
          
          const entry = { ...item, id: `${item.code}-${Date.now()}-${Math.random()}` };
          setLatest(item);
          setRecentKeys((current) => [entry, ...current].slice(0, RECENT_LIMIT));
          playSound();
          setTestedKeys((tested) => new Set(tested).add(keyCode));
        }
      }
    };

    const handleKeyUp = (event) => {
      setActiveKeys((current) => {
        if (!current.has(event.code)) return current;
        const next = new Map(current);
        next.delete(event.code);
        return next;
      });
      setStuckCodes((current) => {
        if (!current.has(event.code)) return current;
        const next = new Set(current);
        next.delete(event.code);
        return next;
      });
    };

    const handleMouseDown = (event) => {
      const click = mouseNames[event.button];
      if (!click) return;
      setActiveMouseButtons((current) => new Set(current).add(click.code));
      addRecent(click);
      playSound();
    };

    const handleMouseUp = (event) => {
      const click = mouseNames[event.button];
      if (!click) return;
      setActiveMouseButtons((current) => {
        if (!current.has(click.code)) return current;
        const next = new Set(current);
        next.delete(click.code);
        return next;
      });
    };

    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('contextmenu', handleContextMenu);
    
    // Additional listeners for special system keys
    window.addEventListener('keydown', handleSpecialKeys, true); // Use capture phase
    window.addEventListener('keyup', handleSpecialKeys, true);
    
    // Try to capture PrintScreen through multiple methods
    document.addEventListener('keydown', handleSpecialKeys, true);
    document.addEventListener('keyup', handleSpecialKeys, true);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleSpecialKeys, true);
      window.removeEventListener('keyup', handleSpecialKeys, true);
      document.removeEventListener('keydown', handleSpecialKeys, true);
      document.removeEventListener('keyup', handleSpecialKeys, true);
    };
  }, [addRecent, labelMap, playSound]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const now = Date.now();
      setStuckCodes(() => {
        const next = new Set();
        activeKeys.forEach((pressedAt, code) => {
          if (now - pressedAt > STUCK_AFTER_MS) {
            next.add(code);
          }
        });
        return next;
      });
    }, 400);

    return () => window.clearInterval(interval);
  }, [activeKeys]);

  // Fallback PrintScreen detection using clipboard monitoring
  useEffect(() => {
    let lastClipboardContent = '';
    
    const checkClipboard = async () => {
      try {
        const text = await navigator.clipboard.readText();
        if (text !== lastClipboardContent && text.includes('data:image/png')) {
          // Likely a PrintScreen action
          const item = { code: 'PrintScreen', name: 'PrtSc' };
          
          if (!activeKeysRef.current.has('PrintScreen')) {
            setActiveKeys((current) => {
              const next = new Map(current);
              next.set('PrintScreen', Date.now());
              return next;
            });
            
            const entry = { ...item, id: `${item.code}-${Date.now()}-${Math.random()}` };
            setLatest(item);
            setRecentKeys((current) => [entry, ...current].slice(0, RECENT_LIMIT));
            playSound();
            setTestedKeys((tested) => new Set(tested).add('PrintScreen'));
          }
          
          lastClipboardContent = text;
        }
      } catch (error) {
        // Clipboard access denied or no content
      }
    };

    const interval = setInterval(checkClipboard, 500);
    return () => clearInterval(interval);
  }, [playSound]);

  const resetSession = useCallback(() => {
    setActiveKeys(new Map());
    setStuckCodes(new Set());
    setActiveMouseButtons(new Set());
    setRecentKeys([]);
    setLatest(null);
    setTestedKeys(new Set());
    lastKeyTime.current = {};
  }, []);

  const changeKeyboardMode = (mode) => {
    setKeyboardMode(mode);
    resetSession();
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b0f14] px-3 py-4 text-slate-100 sm:px-5">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4">
        <header className="app-header">
          <h1 className="text-lg font-semibold text-white sm:text-xl">Keyboard Tester</h1>
          <div className="header-controls">
            <KeyboardModeToggle mode={keyboardMode} onChange={changeKeyboardMode} />
            <LayoutToggle layout={layoutType} onChange={setLayoutType} />
          </div>
        </header>

        <StatusPanel
          latest={latest}
          recentKeys={recentKeys}
          activeCount={activeKeys.size}
          soundEnabled={soundEnabled}
          onToggleSound={() => setSoundEnabled((value) => !value)}
          onReset={resetSession}
        />

        <Keyboard
          layout={layout}
          activeCodes={activeCodes}
          stuckCodes={stuckCodes}
          testedKeys={testedKeys}
          showNumpad={keyboardMode === 'full'}
        />

        <MousePanel activeMouseButtons={activeMouseButtons} />

        <HelpPanel />

        {stuckCodes.size > 0 && (
          <div className="rounded-lg border border-rose-400/25 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
            Possible stuck key: {[...stuckCodes].join(', ')}
          </div>
        )}
      </div>
    </main>
  );
}
