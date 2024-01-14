function addMinimum(word: string): number {
  let index = -1;
  function fromA(): number {
    index += 1;
    if (word.length - 1 === index) {
      return 2;
    }
    switch (word[index]) {
      case 'a': return 2 + fromA();
      case 'b': return fromB();
      case 'c': return 1 + fromC();
      default: return -1;
    }
  }

  function fromB(): number {
    index += 1;
    if (word.length - 1 === index) {
      return 1;
    }
    switch (word[index]) {
      case 'a': return 1 + fromA();
      case 'b': return 2 + fromB();
      case 'c': return fromC();
      default: return -1;
    }
  }

  function fromC(): number {
    index += 1;
    if (word.length - 1 === index) {
      return 0;
    }
    switch (word[index]) {
      case 'a': return fromA();
      case 'b': return 1 + fromB();
      case 'c': return 2 + fromC();
      default: return -1;
    }
  }
  
  return fromA();
};