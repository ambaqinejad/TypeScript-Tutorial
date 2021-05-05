"use strict";
class Department {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    describe() {
        console.log(`Department ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getEmployees() {
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
accounting.addEmployee("Amir");
accounting.addEmployee("Hosein");
accounting.getEmployees();
//# sourceMappingURL=app.js.map