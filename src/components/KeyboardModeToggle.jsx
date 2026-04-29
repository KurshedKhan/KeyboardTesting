import { Grid2X2, Keyboard } from 'lucide-react';

export default function KeyboardModeToggle({ mode, onChange }) {
  const isFull = mode === 'full';

  return (
    <button
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-2 py-2 text-sm font-medium text-slate-200 shadow-lg shadow-black/20 transition hover:bg-white/[0.09]"
      type="button"
      onClick={() => onChange(isFull ? 'compact' : 'full')}
      aria-label="Switch numpad mode"
    >
      <span className={`layout-pill ${isFull ? 'layout-pill-active' : ''}`}>
        <Grid2X2 size={16} />
        With Numpad
      </span>
      <span className={`layout-pill ${!isFull ? 'layout-pill-active' : ''}`}>
        <Keyboard size={16} />
        Without
      </span>
    </button>
  );
}
