import KeyCap from './KeyCap.jsx';

function KeyRow({ keys, activeCodes, stuckCodes, testedKeys }) {
  return (
    <div className="keyboard-row">
      {keys.map((key, index) => (
        <KeyCap
          key={key.code ?? `spacer-${index}`}
          keyData={key}
          active={activeCodes.has(key.code)}
          stuck={stuckCodes.has(key.code)}
          tested={testedKeys.has(key.code)}
        />
      ))}
    </div>
  );
}

function TopCluster({ groups, activeCodes, stuckCodes, testedKeys }) {
  return (
    <div className="top-row">
      {groups.map((group, index) => (
        <div className="top-group" key={index}>
          {group.map((key) => (
            <KeyCap
              key={key.code}
              keyData={key}
              active={activeCodes.has(key.code)}
              stuck={stuckCodes.has(key.code)}
              tested={testedKeys.has(key.code)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function Numpad({ rows, activeCodes, stuckCodes, testedKeys }) {
  return (
    <div className="numpad-grid">
      {rows.flatMap((row) =>
        row.map((key) => (
          <KeyCap
            key={key.code}
            keyData={key}
            active={activeCodes.has(key.code)}
            stuck={stuckCodes.has(key.code)}
            tested={testedKeys.has(key.code)}
          />
        )),
      )}
    </div>
  );
}

export default function Keyboard({ layout, activeCodes, stuckCodes, testedKeys }) {
  return (
    <section className="keyboard-shell" aria-label={`${layout.name} keyboard layout`}>
      <TopCluster groups={layout.top} activeCodes={activeCodes} stuckCodes={stuckCodes} testedKeys={testedKeys} />
      <div className="keyboard-body">
        <div className="main-board">
          {layout.main.map((row, index) => (
            <KeyRow key={index} keys={row} activeCodes={activeCodes} stuckCodes={stuckCodes} testedKeys={testedKeys} />
          ))}
        </div>
        <div className="nav-board">
          {layout.nav.map((row, index) => (
            <KeyRow key={index} keys={row} activeCodes={activeCodes} stuckCodes={stuckCodes} testedKeys={testedKeys} />
          ))}
        </div>
        <Numpad rows={layout.numpad} activeCodes={activeCodes} stuckCodes={stuckCodes} testedKeys={testedKeys} />
      </div>
    </section>
  );
}
