const button = document.querySelector("#btn");
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
