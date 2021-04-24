// Functions
// implicitly refer returning type by typescript
function add1(n1, n2) {
    return n1 + n2;
}
// explicitly set returning typ
function add2(n1, n2) {
    return n1 + n2;
}
// void returning type of function 
function printResult(result) {
    console.log(result);
    return;
}
// multiplier's type is a function
var multiplier = function (x, y) {
    return x * y;
};
var divider;
divider = function (x, y) {
    return x / y;
};
var divider1;
// multiplier = 3; // will throw an error
// divider = 5; // will throw an error
console.log(printResult(add1(23, 24)));
function addAndHandle(n1, n2, cb) {
    // cb(n1, n2); // ERROR
    // cb(n1.toString());  // ERROR
    cb(n1 + n2);
}
addAndHandle(15, 3, function () {
    console.log("Hello");
});
