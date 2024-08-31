function shortestSubstrings(arr: string[]): string[] {
  let subArr: Array<string[]> = [];
  arr.forEach((str) => {
    let tempArr: Array<string> = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = 1; i + j <= str.length; j++) {
        tempArr.push(str.substring(i, i + j));
      }
    }
    tempArr.sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      } else {
        return a.localeCompare(b);
      }
    });
    subArr.push(tempArr);
  });

  let ans: Array<string> = [];
  for (let i = 0; i < subArr.length; i++) {
    let j = 0;
    for (; j < subArr[i].length; j++) {
      let k = 0;
      for (; k < subArr.length; k++) {
        if (i !== k && subArr[k].includes(subArr[i][j])) {
          break;
        }
      }
      if (k === subArr.length) {
        ans.push(subArr[i][j]);
        break;
      }
    }
    if (j === subArr[i].length) {
      ans.push("");
    }
  }
  return ans;
}
