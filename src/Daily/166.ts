function fractionToDecimal(numerator: number, denominator: number): string {
  const sign = numerator * denominator < 0 ? '-' : '';
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  // 计算整数部分 q 和初始余数 r
  let q = Math.floor(numerator / denominator);
  let r = numerator % denominator;
  if (r === 0) { // 没有小数部分
    return sign + String(q);
  }

  const ans = [sign + String(q) + '.'];
  const map = new Map();
  map.set(r, 1);
  while (r) {
    r *= 10;
    q = Math.floor(r / denominator);
    r = r % denominator;
    ans.push(String(q));
    if (map.has(r)) { // 有循环节
      const pos = map.get(r); // 循环节的开始位置
      return ans.slice(0, pos).join('') + '(' + ans.slice(pos).join('') + ')';
    }
    map.set(r, ans.length); // 记录余数对应位置
  }
  return ans.join('');
};

fractionToDecimal(1, 2);
