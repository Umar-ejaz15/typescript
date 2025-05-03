"use strict";
class dpt {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log(`${this.name} is an employee of ${this.employees}`);
    }
}
const person1 = new dpt("John", ["ali", "ahmad"]);
p1.describe();
class accountingdptClass extends dpt {
    constructor(name, employees, reports) {
        super(name, employees);
        this.reports = reports;
    }
    addReport(report) {
        this.reports.push(report);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accdept = new accountingdptClass("aslan", ["ali", "ahmad"], []);
accdept.describe();
accdept.addReport("my name is khan");
accdept.addReport("my name is khani");
accdept.printReports();
