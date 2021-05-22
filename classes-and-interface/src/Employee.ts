class Employee {
  constructor(
    protected readonly name: string,
    protected readonly baseInCome: number
  ) {}

  calculateInCome(): number {
    return 1.2 * this.baseInCome + 200;
  }
}

class Boss extends Employee {
  constructor(
    name: string,
    baseInCome: number,
    private readonly departments: string[]
  ) {
    super(name, baseInCome);
  }

  calculateInCome(): number {
    return 3 * this.baseInCome + 400;
  }

  getDepartments(): string[] {
    return this.departments;
  }
}

const employee: Employee = new Employee("Kamran", 200);
console.log(employee.calculateInCome());

const boss: Boss = new Boss("Ali", 200, ["IT", "Software"]);
console.log(boss.calculateInCome());
console.log(boss.getDepartments());
