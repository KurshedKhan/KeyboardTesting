import { RotateCcw, Volume2, VolumeX } from 'lucide-react';

export default function StatusPanel({
  latest,
  recentKeys,
  activeCount,
  soundEnabled,
  onToggleSound,
  onReset,
}) {
  return (
    <section className="status-panel">
      <div className="tester-input-wrap">
        <label className="sr-only" htmlFor="key-tester-input">
          Keyboard tester input
        </label>
        <input
          className="tester-input"
          id="key-tester-input"
          data-key-capture="true"
          readOnly
          value={latest ? `${latest.name} / ${latest.code}` : ''}
          placeholder="Press any keyboard key"
        />
        <div className="status-metrics">
          <span>
            Pressed <strong>{latest?.name ?? 'Waiting'}</strong>
          </span>
          <span>
            Active <strong>{activeCount}</strong>
          </span>
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

      <div className="mt-3">
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
    </section>
  );
}
