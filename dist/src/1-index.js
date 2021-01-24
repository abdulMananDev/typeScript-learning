"use strict";
const button = document.querySelector("#btn");
const input1 = document.querySelector("#num-1");
const input2 = document.querySelector("#num-2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", () => {
    console.log(add(+input1.value, +input2.value));
});
// Ts lets us wirte better cleaner error free code
// Test Code
function sum(num1, num2) {
    return num1 + num2;
}
let num1 = 8;
let num2 = 5;
console.log(sum(num1, num2));
let buzz = 4;
console.log(buzz);
// object types
// Type Assignment (DONT's)
let objUnion = {
    name: "Manan",
    age: 56
};
//   Type Inference (Do'S)
const person = {
    name: "Manan",
    age: 23
};
console.log(person.name);
// Array type
const array = ["hello", "its", "me"];
let arr = array.map(arr => { });
// Tuple Type
const tup = ["manan", 2, person];
tup.push(15, "n", person);
console.log(tup);
// Enum Type
var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 0] = "AUTHOR";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["CONSUMER"] = 2] = "CONSUMER";
})(Role || (Role = {}));
let testInput = {
    Role: Role.ADMIN
};
console.log(Role.AUTHOR); // OUTPUT=0 ..(0th Index)
Role.ADMIN === testInput.Role
    ? console.log("Dashboard Open")
    : console.log("Get Lost");
// Union Type
let unionExample = ["hello", 1, "two", 256];
console.log(unionExample.reverse());
let typeAliaisingExample = ["hello", 1, "two", 256, true];
// Functions and Voids
function logger(num1) {
    console.log(num1);
    if (2 == 2) {
        return console.log("jello");
    }
}
console.log(logger(sum(15, 25)));
// Function types
function sumOne(num1, num2) {
    return num1 * num2;
}
let myFunctionType;
myFunctionType = sumOne;
// myFunctionType = sum;
console.log(myFunctionType(8, 8));
// function call-backs
let myCallbackFunctionSlate;
function myCallbackFunction(num1, num2, cb) {
    let result = num1 + num2;
    cb(result);
}
myCallbackFunctionSlate = myCallbackFunction;
console.log(myCallbackFunctionSlate(1, 18, result => console.log(result)));
let x;
let i;
let y;
let j;
x = y;
// i != j;
console.log("Watching");
