const mouseButtons = [
  ['MouseLeft', 'Left'],
  ['MouseMiddle', 'Middle'],
  ['MouseRight', 'Right'],
];

export default function MousePanel({ activeMouseButtons }) {
  return (
    <section className="mouse-panel" aria-label="Mouse tester">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Mouse Test</p>
        <p className="mt-1 text-sm text-slate-300">Click any mouse button</p>
      </div>
      <div className="mouse-device" aria-hidden="true">
        {mouseButtons.map(([code, label]) => (
          <span className={`mouse-button ${activeMouseButtons.has(code) ? 'mouse-button-active' : ''}`} key={code}>
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
