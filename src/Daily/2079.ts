function wateringPlants(plants: number[], capacity: number): number {
  const max = capacity;
  let ans = 0;
  for (let i = 0; i < plants.length; i++) {
    if (capacity < plants[i]) {
      capacity = max;
      ans += i * 2;
    }
    ans += 1;
    capacity -= plants[i];
  }
  return ans;
}

wateringPlants([5, 2], 5);
