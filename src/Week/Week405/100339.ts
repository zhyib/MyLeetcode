function getEncryptedString(s: string, k: number): string {
  return s.substring(k % s.length) + s.substring(0, k % s.length);
}
