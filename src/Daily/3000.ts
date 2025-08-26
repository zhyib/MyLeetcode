function areaOfMaxDiagonal(dimensions: number[][]): number {
  let area = 0;
  let max = 0;
  for (let i = 0; i < dimensions.length; i++) {
    const len = Math.sqrt(
      dimensions[i][0] * dimensions[i][0] + dimensions[i][1] * dimensions[i][1]
    );
    if (
      len > max ||
      (len == max && dimensions[i][0] * dimensions[i][1] > area)
    ) {
      max = len;
      area = dimensions[i][0] * dimensions[i][1];
    }
  }
  return area;
}
