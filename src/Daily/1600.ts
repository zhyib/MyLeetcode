class King {
  name: string;
  children: King[];
  dead: boolean;
  constructor(name: string) {
    this.name = name;
    this.children = [];
    this.dead = false;
  }

  getOrder(): string[] {
    const order: string[] = [];
    if (this.dead === false) {
      order.push(this.name);
    }
    this.children.forEach((child) => {
      order.push(...child.getOrder());
    });
    return order;
  }
}

class ThroneInheritance {
  map: Record<string, King>;
  king: King;

  constructor(kingName: string) {
    this.map = {};
    this.king = new King(kingName);
    this.map[kingName] = this.king;
  }

  birth(parentName: string, childName: string): void {
    const king = new King(childName);
    this.map[childName] = king;
    this.map[parentName].children.push(king);
  }

  death(name: string): void {
    this.map[name].dead = true;
  }

  getInheritanceOrder(): string[] {
    return this.king.getOrder();
  }
}

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
