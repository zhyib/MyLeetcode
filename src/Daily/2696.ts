function minLength(s: string): number {
  while (s.indexOf('AB') !== -1 || s.indexOf('CD') !== -1) {
    s = s.replace('AB', '').replace('CD', '');
  }
  return s.length;
};