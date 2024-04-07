function isValidSerialization(preorder: string): boolean {
  let num = 1;
  const arr = preorder.split(",");
  let i = 0;
  for (; i < arr.length; i++) {
    if (arr[i] === "#") {
      num -= 1;
    } else {
      num += 1;
    }
    if (num < 0) {
      return false;
    }
    if (num === 0) {
      break;
    }
  }
  return i === arr.length - 1;
}
