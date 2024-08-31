function maximumBinaryString(binary: string): string {
  let ans: string[] = [];
  let arr = binary.split("");
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") {
      ans.push(arr[i]);
    } else {
      j = Math.max(i, j);
      j += 1;
      for (; j < arr.length; j++) {
        if (arr[j] === "0") {
          arr[j] = "1";
          break;
        }
      }
      if (j < arr.length) {
        arr[i] = "1";
        arr[i + 1] = "0";
        ans.push(arr[i]);
      } else {
        ans.push(...arr.slice(i));
        break;
      }
    }
  }
  return ans.join("");
}

maximumBinaryString("000110");
