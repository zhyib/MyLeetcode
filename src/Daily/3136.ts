function isValid(word: string): boolean {
  return (
    !!word.match(/^\w{3,}$/i) &&
    !!word.match(/([aeiou]+)/i) &&
    !!word.match(/([qwrtypsdfghjklzxcvbn]+)/i)
  );
}
