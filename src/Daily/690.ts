/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number[]
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

class Employee {
  id: number;
  importance: number;
  subordinates: number[];
  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = id === undefined ? 0 : id;
    this.importance = importance === undefined ? 0 : importance;
    this.subordinates = subordinates === undefined ? [] : subordinates;
  }
}
function getImportance(employees: Employee[], id: number): number {
  const map = new Map<number, Employee>();
  for (const employee of employees) {
    map.set(employee.id, employee);
  }

  function dfs(id: number): number {
    const employee = map.get(id)!;
    return employee.importance + employee.subordinates.reduce((sum, id) => sum + dfs(id), 0);
  }

  return dfs(id);
}
