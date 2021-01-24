// spread Operators - ARRAY

const myArr = ["Mannan", "Malik"];

const spreadArray = [...myArr, "Hello"];

console.log(spreadArray);

// spread Operators - OBJECT
const myObj = {
  name: "Manan",
  age: 23
};

const spreadObj = {
  ...myObj
};

console.log(spreadObj.age, spreadObj.name);

// Rest-Arguments
// if we have to pass infinite number of argumnets to a function-
// its built as the spread operator converting given numbers into array

function addit(...numbers: number[]) {
  console.log(numbers);

  let result = numbers.reduce((calcValue, currentvalue) => {
    return calcValue + currentvalue;
  }, 0);
  console.log(result);
}
addit(1, 2.5, 56, 25, 0.3145, 0.6985, 69);
