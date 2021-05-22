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
        this.lastAdmin = "";
        if (this.admins.length > 0) {
            this.lastAdmin = this.admins[this.admins.length - 1];
        }
    }
    get mostLastAdmin() {
        if (this.lastAdmin) {
            return this.lastAdmin;
        }
        throw new Error("There is not any admin.");
    }
    set mostLastAdmin(admin) {
        if (!admin) {
            throw new Error("Add valid admin");
        }
        this.addAdmin(admin);
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
    addAdmin(admin) {
        this.admins.push(admin);
        this.lastAdmin = admin;
    }
}
const it = new ITDepartment("i1", ["Amir"]);
console.log(it.getAdmins());
it.addEmployee("Amir");
console.log(it.mostLastAdmin);
it.mostLastAdmin = "Ali";
console.log(it.mostLastAdmin);
it.addEmployee("Hadi");
console.log(it.getEmployees());
//# sourceMappingURL=app.js.map