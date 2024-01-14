function minExtraChar(s: string, dictionary: string[]): number {

  function getMin(arr: string[], index: number): number {
    if (index === dictionary.length) {
      return arr.reduce((prev, curr) => prev + curr.length, 0);
    }
    const newArr = arr.map((item) => {
      return item.split(dictionary[index])
    }).flat();
    return Math.min(getMin(newArr, index + 1), getMin(arr, index + 1))
  }

  return getMin([s], 0);
};