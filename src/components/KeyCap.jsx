export default function KeyCap({ keyData, active, stuck, tested }) {
  if (keyData.spacer) {
    return <div className="key-spacer" aria-hidden="true" />;
  }

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
      {keyData.shifted ? (
        <span className="flex flex-col items-center leading-none">
          <span className="text-[10px] text-slate-400">{keyData.shifted}</span>
          <span>{keyData.label}</span>
        </span>
      ) : (
        <span>{keyData.label}</span>
      )}
    </div>
  );
}
