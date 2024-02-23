function largestSquareArea(
  bottomLeft: number[][],
  topRight: number[][]
): number {
  class Square {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
    constructor(bottomLeft: number[], topRight: number[]) {
      this.top = topRight[1];
      this.right = topRight[0];
      this.bottom = bottomLeft[1];
      this.left = bottomLeft[0];
      this.width = this.right - this.left;
      this.height = this.top - this.bottom;
    }
  }
  function computeCommon(square1: Square, square2: Square) {
    const left = Math.min(square1.left, square2.left);
    const right = Math.max(square1.right, square2.right);
    const x = Math.max(square1.width + square2.width - (right - left), 0);
    const bottom = Math.min(square1.bottom, square2.bottom);
    const top = Math.max(square1.top, square2.top);
    const y = Math.max(square1.height + square2.height - (top - bottom), 0);
    return Math.min(x, y);
  }

  const squares = bottomLeft.map((bl, i) => {
    return new Square(bl, topRight[i]);
  });
  let ret = 0;
  for (let i = 0; i < squares.length; i++) {
    for (let j = i + 1; j < squares.length; j++) {
      ret = Math.max(ret, computeCommon(squares[i], squares[j]));
    }
  }
  return ret ** 2;
}
