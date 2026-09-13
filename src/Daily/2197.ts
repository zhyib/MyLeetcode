function replaceNonCoprimes(nums: number[]): number[] {
  const st = [];
  for (let x of nums) {
    while (st.length > 0 && gcd(x, st[st.length - 1]) > 1) {
      x = lcm(x, st.pop());
    }
    st.push(x);
  }
  return st;
};

function gcd(a: number, b: number) {
  while (a !== 0) {
    const tmp = a;
    a = b % a;
    b = tmp;
  }
  return b;
};

function lcm(a: number, b: number) {
  return a / gcd(a, b) * b;
};
