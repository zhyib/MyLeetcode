function isValid(word: string): boolean {
  if (word.length < 3) {
    return false;
  }
  if (!word.match(/^[a-zA-Z0-9]+$/)) {
    return false;
  }
  if (
    !word.includes("a") &&
    !word.includes("A") &&
    !word.includes("e") &&
    !word.includes("E") &&
    !word.includes("i") &&
    !word.includes("I") &&
    !word.includes("o") &&
    !word.includes("O") &&
    !word.includes("u") &&
    !word.includes("U")
  ) {
    return false;
  }
  word = word.replace(/[aeiouAEIOU]/g, "");
  word = word.replace(/[0-9]/g, "");
  if (word.length > 0) {
    return true;
  }
  return false;
}

isValid("a3e");
