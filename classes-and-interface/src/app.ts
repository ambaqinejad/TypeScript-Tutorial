class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  // constructor(id: string, name: string) {
  //   this.id = id;
  //   this.name = name;
  // }
  constructor(private readonly id: string, private name: string) {} // Shorthand

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  getEmployees() {
    return this.employees;
  }
}

class ITDepartment extends Department {
  private lastAdmin: string = "";
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
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

  addEmployee(employee: string) {
    if (employee === "Amir") {
      return;
    }
    this.employees.push(employee);
  }

  addAdmin(admin: string) {
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
// const accounting = new Department("d1", "Accounting");
// accounting.describe();
// accounting.addEmployee("Amir");
// accounting.addEmployee("Hosein");
// accounting.getEmployees();

// const HR = { name: "Human Resource" };

// accounting.describe.call(HR);
// const dummy = { describe: accounting.describe, name: "dummy" };
// dummy.describe();
// console.log("USER");
