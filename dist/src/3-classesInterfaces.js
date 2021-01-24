"use strict";
class Apartment {
    constructor(name, size, income) {
        this.apartmentName = name;
        this.apartmentSize = size;
        this.income = income;
    }
    collection(tax) {
        return this.income - tax;
    }
    changeIncome(income) {
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
    constructor(breed) {
        this.breed = breed;
    }
    logger() {
        console.log(this.breed);
    }
}
let dog = new Dog(`German Shepard`);
dog.logger();
// INHERITANCE
class University {
    constructor(departments) {
        this.departments = departments;
    }
    logger() {
        console.log(this.departments);
    }
}
class Cse extends University {
    constructor(staff) {
        super("Computer Science Department");
        this.staff = staff;
        this.staffCount = 0;
    }
    get getStaffInfo() {
        return this.staffCount;
    }
    set setStaffinfo(sC) {
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
