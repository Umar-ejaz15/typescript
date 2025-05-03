"use strict";
class Deparment {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log(`${this.name} is an employee of ${this.employees}`);
    }
}
const p1 = new Deparment("John", ["ali", "ahmad"]);
p1.describe();
