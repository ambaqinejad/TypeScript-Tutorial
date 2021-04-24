// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Amir Hosein',
//     age: 25
// }




// const person = {
//     name: 'Amir Hosein',
//     age: 25,
//     hobbies: ['js', 2]
// }

// let activities: (string | number | boolean)[];


// console.log(typeof activities)



// tuples
// // in this case we can describe person structure
// const person: {
//     name: string;
//     age: number;
//     interestedIn: string[],
//     role: [number, string]
// } = {
//     name: 'Amir',
//     age: 25,
//     interestedIn: ['js', 'node', 'express'],
//     role: [1, 'Backend Developer']
// }

// // person.role.push(25); // push will work unfortunately
// // person.role = [0, 'frontend developer', 3] // will be error
// console.log(person)


// enum
// enum Role {ADMIN = 5, USER = 'USER', READ_ONLY_USER = 2}
// const person = {
//     name: 'Amir',
//     age: 25,
//     interestedIn: ['js', 'node', 'express'],
//     role: Role.USER
// }

// console.log(typeof person);
// if(person.role === Role.USER) {
//     console.log('USER');
// }
// console.log(Role);
