function maximumSwap(num: number): number {
  const arr = num.toString().split('');
  let pair: [string, number][] = arr.map((item, index) => [item, index]);
  pair = pair.sort((a, b) => {
    return Number(b[0]) - Number(a[0]);
  })
  for (let i = 0; i < pair.length; i++) {
    if (pair[i][1] !== i) {
      let index = i;
      // 遍历查找最右侧的同数字
      for (let j = i; j < pair.length - 1; j++) {
        if (pair[i][0] !== pair[j + 1][0]) {
          index = j;
          break;
        }
      }
      let temp = arr[pair[index][1]];
      arr[pair[index][1]] = arr[i];
      arr[i] = temp;
      break;
    }
  }
  return Number(arr.join(''));
};