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
