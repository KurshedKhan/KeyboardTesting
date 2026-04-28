import { Monitor, Apple } from 'lucide-react';

export default function LayoutToggle({ layout, onChange }) {
  const isMac = layout === 'mac';

  return (
    <button
      className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-2 py-2 text-sm font-medium text-slate-200 shadow-lg shadow-black/20 transition hover:bg-white/[0.09]"
      type="button"
      onClick={() => onChange(isMac ? 'windows' : 'mac')}
      aria-label="Switch keyboard layout"
    >
      <span className={`layout-pill ${!isMac ? 'layout-pill-active' : ''}`}>
        <Monitor size={16} />
        Windows
      </span>
      <span className={`layout-pill ${isMac ? 'layout-pill-active' : ''}`}>
        <Apple size={16} />
        Mac
      </span>
    </button>
  );
}
