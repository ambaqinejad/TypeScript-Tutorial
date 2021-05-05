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
        return this.employees;
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
    addEmployee(employee) {
        if (employee === "Amir") {
            return;
        }
        this.employees.push(employee);
    }
}
const it = new ITDepartment("i1", ["Amir"]);
console.log(it.getAdmins());
it.addEmployee("Amir");
it.addEmployee("Hadi");
console.log(it.getEmployees());
//# sourceMappingURL=app.js.map