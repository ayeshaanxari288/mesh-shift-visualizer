function MeshGrid({ grid }) {
  return (
    <div>
      <h3>Mesh Grid</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${grid.length}, 50px)`,
          gap: "5px"
        }}
      >
        {grid.map((row, r) =>
          row.map((val, c) => (
            <div
              key={`${r}-${c}`}
              style={{
                border: "1px solid black",
                padding: "10px",
                textAlign: "center",
                background: "#f2f2f2"
              }}
            >
              {val}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MeshGrid;