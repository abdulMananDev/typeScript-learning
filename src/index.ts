const button = document.querySelector("#btn")!;
const input1 = document.querySelector("#num-1") as HTMLInputElement;
const input2 = document.querySelector("#num-2") as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", () => {
  console.log(add(+input1.value, +input2.value));
});

// Ts lets us wirte better cleaner error free code

// Test Code

function sum(num1: number, num2: number) {
  return num1 + num2;
}
let num1 = 8;
let num2 = 5;

console.log(sum(num1, num2));

let buzz: number = 4;
console.log(buzz);

// object types

// Type Assignment (DONT's)

let objUnion: {
  name: string;
  age: number;
} = {
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
let arr = array.map(arr => {});

// Tuple Type
const tup: [string, number, object] = ["manan", 2, person];
tup.push(15, "n", person);
console.log(tup);

// Enum Type
enum Role {
  AUTHOR,
  ADMIN,
  CONSUMER
}

let testInput = {
  Role: Role.ADMIN
};
console.log(Role.AUTHOR); // OUTPUT=0 ..(0th Index)

Role.ADMIN === testInput.Role
  ? console.log("Dashboard Open")
  : console.log("Get Lost");

// Union Type
let unionExample: (string | number)[] = ["hello", 1, "two", 256];

console.log(unionExample.reverse());

// type-alising

type myTypeAliasing = string | number | Boolean;

let typeAliaisingExample: myTypeAliasing[] = ["hello", 1, "two", 256, true];

// Functions and Voids

function logger(num1: number): void {
  console.log(num1);
  if (2 == 2) {
    return console.log("jello");
  }
}
console.log(logger(sum(15, 25)));

// Function types

function sumOne(num1: number, num2: number) {
  return num1 * num2;
}
let myFunctionType: (a: number, b: number) => number;
myFunctionType = sumOne;
// myFunctionType = sum;
console.log(myFunctionType(8, 8));

// function call-backs

let myCallbackFunctionSlate: (
  a: number,
  b: number,
  callBack: (num: number) => void
) => void;

function myCallbackFunction(
  num1: number,
  num2: number,
  cb: (num3: number) => void
) {
  let result = num1 + num2;
  cb(result);
}

myCallbackFunctionSlate = myCallbackFunction;

console.log(myCallbackFunctionSlate(1, 18, result => console.log(result)));

let x: string;
let i: string;

let y: any;
let j: unknown;

x = y;
// i != j;
console.log("Watching");
