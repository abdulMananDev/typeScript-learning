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
// let myCountry:Monument
class Country {
    constructor(countryName, monName, est, owner, isPublic) {
        this.countryName = countryName;
        this.economyPrecentage = 0;
        this.name = monName;
        this.establishment = est;
        this.ownedBy = owner;
        this.publicPlace = isPublic;
    }
    get getEconomy() {
        return this.economyPrecentage;
    }
    set setEconomy(econ) {
        this.economyPrecentage = econ;
    }
    myRating(rating) {
        console.log(`The Rating for ${this.name} is ${rating}/10`);
    }
}
const India = new Country("India", "TajMahal", 1952, "Shah-Jahan", true);
console.log(India);
India.setEconomy = -9;
let economy = India.getEconomy;
console.log(economy);
India.myRating(8.2);
class Success {
    constructor(pointer, skills) {
        this.pointer = pointer;
        this.skills = skills;
    }
    successCalculation() {
        let rating = this.pointer * this.skills.length;
        if (rating > 20)
            console.log(`You are Great!!!!! with a rating of ${rating}`);
        else
            console.log(`You need to work hard as ${rating} is Low than the Standard `);
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
//usage
let usingFunctionInteface;
usingFunctionInteface = (n1, s1) => {
    console.log(n1 + s1);
};
usingFunctionInteface(2, "k");
let z;
z = {
    i: 56,
    o: (buzz) => {
        console.log(buzz);
    }
};
