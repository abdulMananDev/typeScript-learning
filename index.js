var button = document.querySelector("#btn");
var input1 = document.querySelector("#num-1");
var input2 = document.querySelector("#num-2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
// Ts lets us wirte better cleaner error free code
// Test Code
function sum(num1, num2) {
    return num1 + num2;
}
var num1 = 8;
var num2 = 5;
console.log(sum(num1, num2));
var buzz = 4;
console.log(buzz);
// object types
// Type Assignment (DONT's)
var objUnion = {
    name: "Manan",
    age: 56
};
//   Type Inference (Do'S)
var person = {
    name: "Manan",
    age: 23
};
console.log(person.name);
// Array type
var array = ["hello", "its", "me"];
var arr = array.map(function (arr) { });
// Tuple Type
var tup = ["manan", 2, person];
tup.push(15, "n", person);
console.log(tup);
// Enum Type
var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 0] = "AUTHOR";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["CONSUMER"] = 2] = "CONSUMER";
})(Role || (Role = {}));
var testInput = {
    Role: Role.ADMIN
};
console.log(Role.AUTHOR); // OUTPUT=0 ..(0th Index)
Role.ADMIN === testInput.Role
    ? console.log("Dashboard Open")
    : console.log("Get Lost");
// Union Type
var unionExample = ["hello", 1, "two", 256];
console.log(unionExample.reverse());
var typeAliaisingExample = ["hello", 1, "two", 256, true];
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
var myFunctionType;
myFunctionType = sumOne;
// myFunctionType = sum;
console.log(myFunctionType(8, 8));
// function call-backs
var myCallbackFunctionSlate;
function myCallbackFunction(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
myCallbackFunctionSlate = myCallbackFunction;
console.log(myCallbackFunctionSlate(1, 18, function (result) {
    console.log(result);
}));
