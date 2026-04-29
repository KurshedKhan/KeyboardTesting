import {
  Calculator,
  Folder,
  Globe2,
  Mail,
  Music,
  Play,
  RotateCcw,
  Search,
  SkipBack,
  SkipForward,
  Square,
  Star,
  Undo2,
  Volume1,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';

const icons = {
  calculator: Calculator,
  files: Folder,
  globe: Globe2,
  mail: Mail,
  music: Music,
  play: Play,
  refresh: RotateCcw,
  search: Search,
  previous: SkipBack,
  next: SkipForward,
  stop: Square,
  favorite: Star,
  back: Undo2,
  volumeDown: Volume1,
  volumeUp: Volume2,
  mute: VolumeX,
  close: X,
};

export default function KeyCap({ keyData, active, stuck, tested }) {
  if (keyData.spacer) {
    return <div className="key-spacer" aria-hidden="true" />;
  }

  const Icon = keyData.icon ? icons[keyData.icon] : null;
  const style = {
    '--key-size': keyData.size ?? 1,
    '--key-row-span': keyData.rowSpan ?? 1,
  };

  return (
    <div
      className={`keycap ${active ? 'keycap-active' : ''} ${stuck ? 'keycap-stuck' : ''} ${tested ? 'keycap-tested' : ''}`}
      style={style}
      title={keyData.code}
      data-code={keyData.code}
    >
      {Icon ? (
        <span className="key-icon-label">
          {keyData.prefix && <span>{keyData.prefix}</span>}
          <Icon size={keyData.iconSize ?? 17} strokeWidth={1.8} />
        </span>
      ) : keyData.shifted ? (
        <span className="flex flex-col items-center leading-none">
          <span className="key-shifted-label">{keyData.shifted}</span>
          <span>{keyData.label}</span>
        </span>
      ) : (
        <span>{keyData.label}</span>
      )}
    </div>
  );
}
