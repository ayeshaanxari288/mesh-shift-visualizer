export function shiftMesh(p, q) {
  const n = Math.sqrt(p);

  const rowShift = q % n;
  const colShift = Math.floor(q / n);

  const original = Array.from({ length: n }, (_, r) =>
    Array.from({ length: n }, (_, c) => r * n + c)
  );

  // STEP 1: Row Shift
  const rowShifted = original.map(row => {
    const newRow = Array(n).fill(0);

    row.forEach((val, i) => {
      newRow[(i + rowShift) % n] = val;
    });

    return newRow;
  });

  // STEP 2: Column Shift
  const finalGrid = Array.from({ length: n }, () =>
    Array(n).fill(0)
  );

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const newR = (r + colShift) % n;
      finalGrid[newR][c] = rowShifted[r][c];
    }
  }

  return {
    original,
    rowShifted,
    finalGrid,
    rowShift,
    colShift,
  };
}