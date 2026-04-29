const esc = [{ code: 'Escape', label: 'Esc', size: 1 }];

const functionKeys = [
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'F12',
].map((code) => ({ code, label: code, size: 1 }));

const mediaKeys = [
  [
    { code: 'Fn', label: 'Fn', prefix: 'Fn +', icon: 'volumeUp', size: 1.55 },
  ],
  [
    { code: 'AudioVolumeMute', label: 'Mute', icon: 'mute' },
    { code: 'AudioVolumeDown', label: 'Vol-', icon: 'volumeDown' },
    { code: 'AudioVolumeUp', label: 'Vol+', icon: 'volumeUp' },
    { code: 'MediaTrackPrevious', label: 'Prev', icon: 'previous' },
    { code: 'MediaStop', label: 'Stop', icon: 'stop' },
    { code: 'MediaPlayPause', label: 'Play', icon: 'play' },
    { code: 'MediaTrackNext', label: 'Next', icon: 'next' },
    { code: 'LaunchMediaPlayer', label: 'Music', icon: 'music' },
  ],
  [
    { code: 'BrowserHome', label: 'Web', icon: 'globe' },
    { code: 'BrowserBack', label: 'Back', icon: 'back' },
    { code: 'BrowserForward', label: 'Fwd', icon: 'next' },
    { code: 'BrowserRefresh', label: 'Refresh', icon: 'refresh' },
    { code: 'BrowserStop', label: 'Stop', icon: 'close' },
    { code: 'BrowserSearch', label: 'Search', icon: 'search' },
    { code: 'BrowserFavorites', label: 'Fav', icon: 'favorite' },
  ],
  [
    { code: 'LaunchMail', label: 'Mail', icon: 'mail' },
    { code: 'LaunchApp2', label: 'Calc', icon: 'calculator' },
    { code: 'LaunchExplorer', label: 'Files', icon: 'files' },
  ],
];

const windowsMain = [
  [
    { code: 'Backquote', label: '`', shifted: '~' },
    { code: 'Digit1', label: '1', shifted: '!' },
    { code: 'Digit2', label: '2', shifted: '@' },
    { code: 'Digit3', label: '3', shifted: '#' },
    { code: 'Digit4', label: '4', shifted: '$' },
    { code: 'Digit5', label: '5', shifted: '%' },
    { code: 'Digit6', label: '6', shifted: '^' },
    { code: 'Digit7', label: '7', shifted: '&' },
    { code: 'Digit8', label: '8', shifted: '*' },
    { code: 'Digit9', label: '9', shifted: '(' },
    { code: 'Digit0', label: '0', shifted: ')' },
    { code: 'Minus', label: '-', shifted: '_' },
    { code: 'Equal', label: '=', shifted: '+' },
    { code: 'Backspace', label: 'Backspace', size: 2 },
  ],
  [
    { code: 'Tab', label: 'Tab', size: 1.5 },
    { code: 'KeyQ', label: 'Q' },
    { code: 'KeyW', label: 'W' },
    { code: 'KeyE', label: 'E' },
    { code: 'KeyR', label: 'R' },
    { code: 'KeyT', label: 'T' },
    { code: 'KeyY', label: 'Y' },
    { code: 'KeyU', label: 'U' },
    { code: 'KeyI', label: 'I' },
    { code: 'KeyO', label: 'O' },
    { code: 'KeyP', label: 'P' },
    { code: 'BracketLeft', label: '[', shifted: '{' },
    { code: 'BracketRight', label: ']', shifted: '}' },
    { code: 'Backslash', label: '\\', shifted: '|', size: 1.5 },
  ],
  [
    { code: 'CapsLock', label: 'Caps', size: 1.75 },
    { code: 'KeyA', label: 'A' },
    { code: 'KeyS', label: 'S' },
    { code: 'KeyD', label: 'D' },
    { code: 'KeyF', label: 'F' },
    { code: 'KeyG', label: 'G' },
    { code: 'KeyH', label: 'H' },
    { code: 'KeyJ', label: 'J' },
    { code: 'KeyK', label: 'K' },
    { code: 'KeyL', label: 'L' },
    { code: 'Semicolon', label: ';', shifted: ':' },
    { code: 'Quote', label: "'", shifted: '"' },
    { code: 'Enter', label: 'Enter', size: 2.25 },
  ],
  [
    { code: 'ShiftLeft', label: 'Shift', size: 2.25 },
    { code: 'KeyZ', label: 'Z' },
    { code: 'KeyX', label: 'X' },
    { code: 'KeyC', label: 'C' },
    { code: 'KeyV', label: 'V' },
    { code: 'KeyB', label: 'B' },
    { code: 'KeyN', label: 'N' },
    { code: 'KeyM', label: 'M' },
    { code: 'Comma', label: ',', shifted: '<' },
    { code: 'Period', label: '.', shifted: '>' },
    { code: 'Slash', label: '/', shifted: '?' },
    { code: 'ShiftRight', label: 'Shift', size: 2.75 },
  ],
  [
    { code: 'ControlLeft', label: 'Ctrl', size: 1.35 },
    { code: 'MetaLeft', label: 'Win', size: 1.25 },
    { code: 'AltLeft', label: 'Alt', size: 1.25 },
    { code: 'Space', label: 'Space', size: 6.25 },
    { code: 'AltRight', label: 'Alt', size: 1.25 },
    { code: 'MetaRight', label: 'Win', size: 1.25 },
    { code: 'ContextMenu', label: 'Menu', size: 1.25 },
    { code: 'ControlRight', label: 'Ctrl', size: 1.35 },
  ],
];

const macMain = [
  ...windowsMain.slice(0, 4),
  [
    { code: 'Fn', label: 'fn', size: 1 },
    { code: 'ControlLeft', label: 'control', size: 1.35 },
    { code: 'AltLeft', label: 'option', size: 1.35 },
    { code: 'MetaLeft', label: 'command', size: 1.65 },
    { code: 'Space', label: 'Space', size: 5.2 },
    { code: 'MetaRight', label: 'command', size: 1.65 },
    { code: 'AltRight', label: 'option', size: 1.35 },
    { code: 'ControlRight', label: 'control', size: 1.35 },
  ],
];

const navigation = [
  [{ code: 'PrintScreen', label: 'Prt' }, { code: 'ScrollLock', label: 'Scr' }, { code: 'Pause', label: 'Pause' }],
  [{ code: 'Insert', label: 'Ins' }, { code: 'Home', label: 'Home' }, { code: 'PageUp', label: 'PgUp' }],
  [{ code: 'Delete', label: 'Del' }, { code: 'End', label: 'End' }, { code: 'PageDown', label: 'PgDn' }],
  [{ spacer: true }, { spacer: true }, { spacer: true }],
  [{ spacer: true }, { code: 'ArrowUp', label: 'Up' }, { spacer: true }],
  [{ code: 'ArrowLeft', label: 'Left' }, { code: 'ArrowDown', label: 'Down' }, { code: 'ArrowRight', label: 'Right' }],
];

const macNavigation = [
  [{ code: 'F13', label: 'F13' }, { code: 'F14', label: 'F14' }, { code: 'F15', label: 'F15' }],
  [{ code: 'Insert', label: 'help' }, { code: 'Home', label: 'home' }, { code: 'PageUp', label: 'page up' }],
  [{ code: 'Delete', label: 'del' }, { code: 'End', label: 'end' }, { code: 'PageDown', label: 'page down' }],
  ...navigation.slice(3),
];

const numpad = [
  [{ code: 'NumLock', label: 'Num' }, { code: 'NumpadDivide', label: '/' }, { code: 'NumpadMultiply', label: '*' }, { code: 'NumpadSubtract', label: '-' }],
  [{ code: 'Numpad7', label: '7' }, { code: 'Numpad8', label: '8' }, { code: 'Numpad9', label: '9' }, { code: 'NumpadAdd', label: '+', rowSpan: 2 }],
  [{ code: 'Numpad4', label: '4' }, { code: 'Numpad5', label: '5' }, { code: 'Numpad6', label: '6' }],
  [{ code: 'Numpad1', label: '1' }, { code: 'Numpad2', label: '2' }, { code: 'Numpad3', label: '3' }, { code: 'NumpadEnter', label: 'Enter', rowSpan: 2 }],
  [{ code: 'Numpad0', label: '0', size: 2 }, { code: 'NumpadDecimal', label: '.' }],
];

export const layouts = {
  windows: {
    name: 'Windows',
    media: mediaKeys,
    top: [esc, functionKeys.slice(0, 4), functionKeys.slice(4, 8), functionKeys.slice(8, 12)],
    main: windowsMain,
    nav: navigation,
    numpad,
  },
  mac: {
    name: 'Mac',
    media: mediaKeys,
    top: [
      esc,
      functionKeys.slice(0, 3),
      functionKeys.slice(3, 6),
      functionKeys.slice(6, 9),
      functionKeys.slice(9, 12),
    ],
    main: macMain,
    nav: macNavigation,
    numpad,
  },
};

export function buildKeyLabelMap(layout) {
  const map = new Map();
  const collect = (keys) => {
    keys.flat(Infinity).forEach((key) => {
      if (key?.code) {
        map.set(key.code, key.label);
      }
    });
  };

  collect(layout.top);
  collect(layout.media);
  collect(layout.main);
  collect(layout.nav);
  collect(layout.numpad);
  return map;
}
