function maximumEnergy(energy: number[], k: number): number {
  let arr = new Array<number>(k).fill(0);
  for (let i = 0; i < energy.length; i++) {
    if (energy[i] + arr[i % k] < energy[i]) {
      arr[i % k] = energy[i];
    } else {
      arr[i % k] += energy[i];
    }
  }
  return Math.max(...arr);
}
