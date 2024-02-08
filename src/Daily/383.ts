function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) {
    return false;
  }
  const arr = new Array(26).fill(0);
  for (let i = 0; i < magazine.length; i++) {
    arr[magazine.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (arr[ransomNote.charCodeAt(i) - 97] === 0) {
      return false;
    }
    arr[ransomNote.charCodeAt(i) - 97]--;
  }
  return true;
}
