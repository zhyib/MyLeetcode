function doesValidArrayExist(derived: number[]): boolean {
  return derived.reduce((xor, x) => xor ^ x, 0) === 0;
}
