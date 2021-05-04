const add = (a: number, b: number = 3) => a + b;

const printResult: (input: number | string) => void = (input) =>
  console.log(input);

printResult(add(5, 6));

// spread operator
const adder = (...numbers: number[]) => {
  return numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
};

console.log(adder(1, 2, 3, 4));

// Destructuring
const hobbies: string[] = ["Playing", "Cooking", "Running", "Codding"];
const [hobby1, ...others] = hobbies;
console.log(hobby1);
console.log(others);

const user = {
  username: "ambaqinejad",
  age: 24,
};

const { username: uname, age } = user;
console.log(uname, age);
