class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  // constructor(id: string, name: string) {
  //   this.id = id;
  //   this.name = name;
  // }
  constructor(private readonly id: string, private name: string) {} // Shorthand

  describe(this: Department) {
    console.log(`Department ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  getEmployees() {
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");
accounting.describe();
accounting.addEmployee("Amir");
accounting.addEmployee("Hosein");
accounting.getEmployees();
// const HR = { name: "Human Resource" };

// accounting.describe.call(HR);
// const dummy = { describe: accounting.describe, name: "dummy" };
// dummy.describe();
// console.log("USER");
