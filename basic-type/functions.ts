// Functions

// implicitly refer returning type by typescript
function add1(n1: number, n2:number) {
    return n1 + n2;
}

// explicitly set returning type
function add2(n1: number, n2:number): number {
    return n1 + n2;
}

// void returning type of function 
function printResult(result: number): void {
    console.log(result);
    return;
}






// multiplier's type is a function
let multiplier = (x, y) => {
    return x * y
}

let divider: Function;
divider = (x, y) => {
    return x / y
}

let divider1: (x: number, y: number) => number

// multiplier = 3; // will throw an error

// divider = 5; // will throw an error


console.log(printResult(add1(23, 24)))

function addAndHandle(n1: number, n2:number, cb: (n3: number) => void) {
    // cb(n1, n2); // ERROR
    // cb(n1.toString());  // ERROR
    cb(n1 + n2)
}

addAndHandle(15, 3, () => {
    console.log("Hello")
})