//  GENERIC'S

// main-TYPE<what it will resolve to TYPE>

let myArray: string[] = [];

let genericArrray: Array<number> = [1, 2, 3];

interface U {
  num: number;
  str: string;
}
let myArray2: Array<U> = [{ num: 88, str: "" }];
myArray2.push({ num: 5, str: "" }, { num: 8, str: "" });

type Z = {
  hexa: boolean;
};
function test<GEN extends U>(params: string, param1: GEN) {
  console.log(params, param1.num);
}
function test0<U>(params: number, param1?: string) {
  console.log("testing...");
  let y: Z = { hexa: false };
  y.hexa = false;
}

let xyz = test0(5, "");
console.log(xyz);

test("", { num: 5, str: "Manan" });

console.log(myArray2);
// Promises

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("This is resovlved");
  }, 2000);
});

promise
  .then(data => {
    data.split("");
    console.log(data);
  })
  .catch(() => {});

//   CUSTOM GENERICS

function merger<O, B>(a: O, b: B) {
  // O & B (INTERSECTION)
  return Object.assign(a, b);
}

const mergedObj = merger({ name: "Manan" }, { age: 15 });
console.log(mergedObj);

// Generic Constraint
function merger2<O extends object, B extends object>(a: O, b: B) {
  return Object.assign(a, b);
}

const merged2Obj = merger2({ name: "Manan" }, { age: 15 });
console.log(merged2Obj);
mergedObj.age;

function harrass(param: string[], param2: string[]): string[] {
  //   let a: object;
  //   a = Object.assign(param, param2);

  let p = [...param, ...param2];
  return p;
}

let checkk = harrass(["hello"], ["World"]);
console.log(checkk.length);

// Extending Concepts

interface itsNumber {
  myLength: number;
}

function doSomething<T1 extends itsNumber>(param1: T1): [T1, string] {
  let myText = "no-value";
  if (param1.myLength < 0) {
    myText = "still no value";
  } else if (param1.myLength > 0) myText = `the value is ${param1.myLength}`;
  return [param1, myText];
}

console.log(doSomething({ myLength: 5 }));

// CONSTRAINT'S

// 1- keyof constraint

function keyValueLogger<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(keyValueLogger({ name: "Ma nan" }, "name"));

function Data<D>(d1: D) {
  console.log(d1);
}

Data<string>("yu");
Data<Array<string | object>>(["hello", { melon: "its yum" }]);

class DataStorage<T> {
  private data: T[] = [];

  addData(item: T) {
    this.data.push(item);
  }
  removeData(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  showData() {
    console.log(...this.data);
  }
}

const d1 = new DataStorage();
d1.addData([]);
