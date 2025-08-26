function average(salary: number[]): number {
  salary.sort((a, b) => a - b);
  return (salary.reduce((a, b) => a + b, 0) - salary[0] - salary[salary.length - 1]) / (salary.length - 2);
};