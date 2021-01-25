class Apartment {
  apartmentName: string;
  apartmentSize: number | string;
  private income: number;

  constructor(name: string, size: number | string, income: number) {
    this.apartmentName = name;
    this.apartmentSize = size;
    this.income = income;
  }

  collection(this: Apartment, tax: number) {
    return this.income - tax;
  }
  changeIncome(income: number) {
    this.income = income;
  }
}

const myApartmentOne = new Apartment("Akshaya Nagar", 1500, 58000);
const myApartmentTwo = new Apartment("Begur", "1800m-square", 85000);

//
// myApartmentTwo.income = 8000;

// let dummyAprartmentObj = {
//   apartmentName: "Other Apartment",
//   apartmentSize: "5000sq-km",
//   income: 5000,
//   collection: myApartmentTwo.collection
// };
// console.log(dummyAprartmentObj.collection(10));

// myApartmentOne.income = 800;

myApartmentOne.changeIncome(800);
let originalIncome = myApartmentOne.collection(10);
console.log(originalIncome);

// SHORTHAND INITIALIZATION
class Dog {
  constructor(public breed: string) {}

  logger() {
    console.log(this.breed);
  }
}

let dog = new Dog(`German Shepard`);
dog.logger();

// INHERITANCE

class University {
  constructor(public departments: string) {}
  logger() {
    console.log(this.departments);
  }
}

class Cse extends University {
  private staffCount: number = 0;
  constructor(public staff: string[]) {
    super("Computer Science Department");
  }

  get getStaffInfo() {
    return this.staffCount;
  }
  set setStaffinfo(sC: number) {
    this.staffCount = sC;
    console.log(sC);
  }
  logsStaff() {
    console.log(this.staff, this.getStaffInfo);
  }
}

const cseDep = new Cse(["Asif Ali Banka Sir", "Mujtaba Sir"]);

cseDep.setStaffinfo = 298;

cseDep.logger();
cseDep.logsStaff();

// interface

interface Monument {
  name: string;
  establishment: number;
  ownedBy: string;
  publicPlace: boolean;
  myRating(rating: number): void;
}
interface Economy {
  economyPrecentage: number;
}

// let myCountry:Monument
class Country implements Monument, Economy {
  name: string;
  establishment: number;
  ownedBy: string;
  publicPlace: boolean;
  economyPrecentage: number = 0;
  constructor(
    protected countryName: string,
    monName: string,
    est: number,
    owner: string,
    isPublic: boolean
  ) {
    this.name = monName;
    this.establishment = est;
    this.ownedBy = owner;
    this.publicPlace = isPublic;
  }

  get getEconomy() {
    return this.economyPrecentage;
  }
  set setEconomy(econ: number) {
    this.economyPrecentage = econ;
  }

  myRating(rating: number) {
    console.log(`The Rating for ${this.name} is ${rating}/10`);
  }
}

const India = new Country("India", "TajMahal", 1952, "Shah-Jahan", true);
console.log(India);
India.setEconomy = -9;
let economy = India.getEconomy;
console.log(economy);
India.myRating(8.2);

// INHERITANCE IN INTERFACES

interface Degree {
  readonly pointer: number;
}

interface Job extends Degree {
  skills: string[];
}

class Success implements Job {
  pointer: number;
  skills: string[];
  constructor(pointer: number, skills: string[]) {
    this.pointer = pointer;
    this.skills = skills;
  }

  successCalculation() {
    let rating = this.pointer * this.skills.length;
    if (rating > 20)
      console.log(`You are Great!!!!! with a rating of ${rating}`);
    else
      console.log(
        `You need to work hard as ${rating} is Low than the Standard `
      );
  }
}

const Manan = new Success(5, [
  "Exel",
  "Word",
  "Powerpoint",
  "Communicaiton",
  ""
]);
Manan.successCalculation();

// INTERFACE AS FUNCTION TYPES
interface myFunctionInterface {
  (num1: number, num2: string): void; //define like anonymous
}

//usage

let usingFunctionInteface: myFunctionInterface;

usingFunctionInteface = (n1: number, s1: string) => {
  console.log(n1 + s1);
};
usingFunctionInteface(2, "k");

// OPTIONAL PARAMETERS

interface x {
  y?: string;
  i: number;
  o: (buzz: number, fizz?: number) => void;
}

let z: x;
z = {
  i: 56,
  o: (buzz: number) => {
    console.log(buzz);
  }
};
