function canSeePersonsCount(heights: number[]): number[] {
  const n = heights.length;
  const stack: number[] = new Array();
  const result: number[] = new Array(n).fill(0);
  for (let i = heights.length - 1; i >= 0; i--) {
    while (stack.length !== 0 && heights[i] > stack[-1]) {
      stack.pop();
      result[i] += 1;
    }
    if (stack.length !== 0) {
      result[i] += 1;
    }
    stack.push(heights[i])
  }
  return result;
};

canSeePersonsCount([5,1,2,3,10])