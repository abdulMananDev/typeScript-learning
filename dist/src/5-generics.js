"use strict";
//  GENERIC'S
// main-TYPE<what it will resolve to TYPE>
let myArray = [];
let genericArrray = [1, 2, 3];
let myArray2 = [{ num: 88, str: "" }];
myArray2.push({ num: 5, str: "" }, { num: 8, str: "" });
function test(params, param1) {
    console.log(params, param1.num);
}
function test0(params, param1) {
    console.log("testing...");
    let y = { hexa: false };
    y.hexa = false;
}
let xyz = test0(5, "");
console.log(xyz);
test("", { num: 5, str: "Manan" });
console.log(myArray2);
// Promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is resovlved");
    }, 2000);
});
promise
    .then(data => {
    data.split("");
    console.log(data);
})
    .catch(() => { });
//   CUSTOM GENERICS
function merger(a, b) {
    // O & B (INTERSECTION)
    return Object.assign(a, b);
}
const mergedObj = merger({ name: "Manan" }, { age: 15 });
console.log(mergedObj);
// Generic Constraint
function merger2(a, b) {
    return Object.assign(a, b);
}
const merged2Obj = merger2({ name: "Manan" }, { age: 15 });
console.log(merged2Obj);
mergedObj.age;
function harrass(param, param2) {
    //   let a: object;
    //   a = Object.assign(param, param2);
    let p = [...param, ...param2];
    return p;
}
let checkk = harrass(["hello"], ["World"]);
console.log(checkk.length);
function doSomething(param1) {
    let myText = "no-value";
    if (param1.myLength < 0) {
        myText = "still no value";
    }
    else if (param1.myLength > 0)
        myText = `the value is ${param1.myLength}`;
    return [param1, myText];
}
console.log(doSomething({ myLength: 5 }));
// CONSTRAINT'S
// 1- keyof constraint
function keyValueLogger(obj, key) {
    return obj[key];
}
console.log(keyValueLogger({ name: "Ma nan" }, "name"));
function Data(d1) {
    console.log(d1);
}
Data("yu");
Data(["hello", { melon: "its yum" }]);
class DataStorage {
    constructor() {
        this.data = [];
    }
    addData(item) {
        this.data.push(item);
    }
    removeData(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    showData() {
        console.log(...this.data);
    }
}
const d1 = new DataStorage();
d1.addData([]);
