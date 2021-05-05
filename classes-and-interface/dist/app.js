"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getEmployees() {
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    getAdmins() {
        return this.admins;
    }
}
const accounting = new Department("d1", "Accounting");
accounting.describe();
accounting.addEmployee("Amir");
accounting.addEmployee("Hosein");
accounting.getEmployees();
//# sourceMappingURL=app.js.map