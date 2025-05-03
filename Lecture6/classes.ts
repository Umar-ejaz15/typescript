class Deparment {
  name: string;
  employees: string[];
  constructor(name: string, employees: string[]) {
    this.name = name;
    this.employees = employees;
  }
  describe() {
    console.log(`${this.name} is an employee of ${this.employees}`);
  }
}

const p1 = new Deparment("John", ["ali", "ahmad"]);
p1.describe();
