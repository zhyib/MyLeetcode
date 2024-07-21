function sumOfTheDigitsOfHarshadNumber(x: number): number {
  let sum = 0;
  let temp = x;
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  if (x % sum === 0) {
    return sum;
  } else {
    return -1;
  }
}
