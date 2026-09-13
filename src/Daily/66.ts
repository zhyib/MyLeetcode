function plusOne(digits: number[]): number[] {
  let carry = 1;
  let index = digits.length - 1;
  while (carry !== 0 && index >= 0) {
    digits[index] += carry;
    carry = Math.floor(digits[index] / 10);
    digits[index] %= 10;
    index--;
  }
  if (carry !== 0) {
    digits.unshift(carry);
  }
  return digits;
};