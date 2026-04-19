import { useState } from "react";
import { shiftMesh } from "./utils/shiftLogic";

import ControlPanel from "./components/ControlPanel";
import MeshGrid from "./components/MeshGrid";
import ComplexityPanel from "./components/ComplexityPanel";

function App() {
  const [p, setP] = useState(16);
  const [q, setQ] = useState(1);
  const [stage, setStage] = useState(0);

  const result = shiftMesh(p, q);

  let grid;

  if (stage === 0) {
    grid = result.original;
  } else if (stage === 1) {
    grid = result.rowShifted;
  } else {
    grid = result.finalGrid;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mesh Circular Shift Visualizer</h1>

      <ControlPanel p={p} setP={setP} q={q} setQ={setQ} />

      <div>
        <button onClick={() => setStage(0)}>Original</button>
        <button onClick={() => setStage(1)}>Row Shift</button>
        <button onClick={() => setStage(2)}>Column Shift</button>
      </div>

      <MeshGrid grid={grid} />

      <ComplexityPanel p={p} q={q} />
    </div>
  );
}

export default App;