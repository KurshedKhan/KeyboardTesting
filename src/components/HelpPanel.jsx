const notes = [
  {
    title: 'Print Screen / PrtSc',
    text: 'Windows kai baar screenshot tool open kar deta hai, isliye key highlight hone me delay ya browser permission issue aa sakta hai.',
  },
  {
    title: 'Fn aur media keys',
    text: 'Fn key aksar browser tak direct event nahi bhejti; volume, play, brightness jaise buttons laptop brand ke software par depend karte hain.',
  },
  {
    title: 'Pause, Scroll Lock, Num Lock',
    text: 'Ye legacy/system keys hain; kuch compact keyboards me physical key missing hoti hai ya combo shortcut se trigger hoti hai.',
  },
  {
    title: 'Windows / Command key',
    text: 'OS shortcuts intercept ho sakte hain, jaise Start menu ya system command open hona.',
  },
  {
    title: 'Browser shortcut keys',
    text: 'Back, Forward, Refresh, Search aur Favorites keys tab/browser action bhi chala sakti hain.',
  },
  {
    title: 'Numpad keys',
    text: 'Num Lock off hone par numpad numbers navigation keys ki tarah behave kar sakte hain.',
  },
];

export default function HelpPanel() {
  return (
    <section className="help-panel" aria-label="Keys that may be harder to test">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Testing Notes</p>
        <h2 className="mt-1 text-base font-semibold text-slate-100">Keys jahan thodi dikkat aa sakti hai</h2>
      </div>
      <ul className="help-list">
        {notes.map((note) => (
          <li key={note.title}>
            <strong>{note.title}</strong>
            <span>{note.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
