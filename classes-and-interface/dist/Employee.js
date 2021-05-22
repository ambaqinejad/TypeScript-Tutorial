"use strict";
class Employee {
    constructor(name, baseInCome) {
        this.name = name;
        this.baseInCome = baseInCome;
    }
    calculateInCome() {
        return 1.2 * this.baseInCome + 200;
    }
}
class Boss extends Employee {
    constructor(name, baseInCome, departments) {
        super(name, baseInCome);
        this.departments = departments;
    }
    calculateInCome() {
        return 3 * this.baseInCome + 400;
    }
    getDepartments() {
        return this.departments;
    }
}
const employee = new Employee("Kamran", 200);
console.log(employee.calculateInCome());
const boss = new Boss("Ali", 200, ["IT", "Software"]);
console.log(boss.calculateInCome());
console.log(boss.getDepartments());
//# sourceMappingURL=Employee.js.map