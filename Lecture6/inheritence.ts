class dpt {
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
  
  const person1 = new dpt("John", ["ali", "ahmad"]);
  p1.describe();
  
  class accountingdptClass extends dpt {
    reports: string[];
    constructor(name: string, employees: string[], reports: string[]) {
      super(name, employees);
      this.reports = reports;
    }
    addReport(report: string) {
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
  
  