// unknown type


// let userInput: unknown;
// let username: string;

// userInput = 4
// userInput = "Ali";
// username = userInput;  // will throw an error
// unknown is more restrictive than any. To solve this we can check type
// if (typeof userInput === "string") {
//     username = userInput; // this is ok
// }


// but there is a difference with type any

// let userInput: any;
// let username: string;

// userInput = 4;
// userInput = "Ali";
// username = userInput; // this is ok



// never type


// function creatingError(message: string, code: number): never {
//     throw {message, code}
//     // while (true) {}
// }