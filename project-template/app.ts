// union type

// function combine(input1: number | string, input2: number | string) {
//     let result: (number | string);
//     if(typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }

// let combineNumbers = combine(23, 24);
// console.log(combineNumbers);
// let combineNames = combine('Amir ', 'Hosein');
// console.log(combineNames);




// literal type
// enum type {as_number = 'as_number', as_string = 'as_string'}
// function combine(input1: number | string, 
//     input2: number | string, 
//     conversionType: 'as_number' | 'as_string') {
//     let result: (number | string);
//     if(typeof input1 === 'number' && typeof input2 === 'number' || conversionType === 'as_number') {
//         result = +input1 + +input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }

// let combineNumbers = combine(23, 24, type.as_number);
// console.log(combineNumbers);
// let combineStringNumbers = combine('23', '24', type.as_number);
// console.log(combineNumbers);
// let combineNames = combine('Amir ', 'Hosein', type.as_string);
// console.log(combineNames);




// alias
enum _type {as_number = 'as_number', as_string = 'as_string'}
type conversionDescriptor = 'as_number' | 'as_string';
function combine(input1: number | string, input2: number | string, conversionType: conversionDescriptor) {
    let result: (number | string);
    if(typeof input1 === 'number' && typeof input2 === 'number' || conversionType === 'as_number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

let combineNumbers = combine(23, 24, _type.as_number);
console.log(combineNumbers);
let combineStringNumbers = combine('23', '24', _type.as_number);
console.log(combineNumbers);
let combineNames = combine('Amir ', 'Hosein', _type.as_string);
console.log(combineNames);