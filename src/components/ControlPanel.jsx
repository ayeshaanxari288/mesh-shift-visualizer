function ControlPanel({ p, setP, q, setQ }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Control Panel</h3>

      <label>P (4–64): </label>
      <input
        type="number"
        value={p}
        min="4"
        step="4"
        onChange={(e) => setP(Number(e.target.value))}
      />

      <br />

      <label>Q: </label>
      <input
        type="number"
        value={q}
        min="1"
        onChange={(e) => setQ(Number(e.target.value))}
      />
    </div>
  );
}

export default ControlPanel;