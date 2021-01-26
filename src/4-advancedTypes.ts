//  INTERSECTION TYPE

// A) In-Objects
type myObj = {
  name: string;
  age: number;
};

type myOtherObj = {
  name: string;
  value: number;
};

let using: myObj & myOtherObj;
using = {
  name: "Manan",
  age: 15,
  value: 56
};

// B) IN-Union Types
type alias = string | number;
type alias2 = number | boolean;

let Universal: alias & alias2; //Numver types
Universal = 1515;

// ... Incomplete
