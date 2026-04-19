function ComplexityPanel({ p, q }) {
  const n = Math.sqrt(p);

  const rowShift = q % n;
  const colShift = Math.floor(q / n);

  const ringSteps = Math.min(q, p - q);
  const meshSteps = rowShift + colShift;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Complexity Analysis</h3>

      <p>Row Shift: {rowShift}</p>
      <p>Column Shift: {colShift}</p>

      <hr />

      <p>Ring Steps: {ringSteps}</p>
      <p>Mesh Steps: {meshSteps}</p>

      <h4>Mesh is more efficient because it splits movement into 2 dimensions.</h4>
    </div>
  );
}

export default ComplexityPanel;