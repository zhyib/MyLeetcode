function judgePoint24(cards: number[]): boolean {
  const EPS = 1e-9;
  const n = cards.length;
  if (n === 1) {
    return Math.abs(cards[0] - 24) < EPS;
  }

  // 选两张牌 x=cards[i] 和 y=cards[j]
  for (let i = 0; i < n; i++) {
    const x = cards[i];
    for (let j = i + 1; j < n; j++) {
      const y = cards[j];

      // 六种情况：加减乘除，其中减和除都有两种不同的顺序
      const candidates = [x + y, x - y, y - x, x * y];
      if (Math.abs(y) > EPS) {
        // 保证分母不为 0
        candidates.push(x / y);
      }
      if (Math.abs(x) > EPS) {
        // 保证分母不为 0
        candidates.push(y / x);
      }

      const newCards = cards.slice(0, j).concat(cards.slice(j + 1)); // 删除 j
      for (const res of candidates) {
        newCards[i] = res; // 覆盖 i
        if (judgePoint24(newCards)) {
          return true;
        }
      }
    }
  }
  return false;
}
