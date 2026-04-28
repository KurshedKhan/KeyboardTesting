import { RotateCcw, Volume2, VolumeX } from 'lucide-react';

export default function StatusPanel({
  latest,
  recentKeys,
  activeCount,
  activeMouseButtons,
  soundEnabled,
  onToggleSound,
  onReset,
}) {
  return (
    <section className="status-panel">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-teal-200/70">Keyboard Tester</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            Pressed: <span className="text-teal-200">{latest?.name ?? 'Waiting'}</span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Code: <span className="font-mono text-slate-200">{latest?.code ?? 'None'}</span>
            <span className="mx-3 text-slate-600">/</span>
            Active keys: <span className="font-mono text-slate-200">{activeCount}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="icon-button" type="button" onClick={onToggleSound} title="Toggle key sound">
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
          <button className="icon-button" type="button" onClick={onReset} title="Reset session">
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      <div className="mt-6">
        <div className="recent-strip" aria-label="Recent pressed keys">
          {recentKeys.length === 0 ? (
            <span className="text-sm text-slate-500">Recent keys appear here</span>
          ) : (
            recentKeys.map((item) => (
              <span className="recent-chip" key={item.id}>
                {item.name}
              </span>
            ))
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" aria-label="Mouse button tester">
        {[
          ['MouseLeft', 'Left Click'],
          ['MouseMiddle', 'Middle Click'],
          ['MouseRight', 'Right Click'],
        ].map(([code, label]) => (
          <span className={`mouse-chip ${activeMouseButtons.has(code) ? 'mouse-chip-active' : ''}`} key={code}>
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
