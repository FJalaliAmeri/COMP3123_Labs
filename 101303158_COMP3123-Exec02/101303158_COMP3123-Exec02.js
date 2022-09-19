"use strict";
//Farshad Jalali Ameri - 101303158



// Exercise 1
console.log("")
console.log("Farshad Jalali Ameri - 101303158")
console.log("")
console.log("*********** Exercise 1 ***********")

const greeter = (myArray, counter) => { 
    for(let indexes of myArray.values()){
        console.log(`Hello ${indexes}`)
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Exercise 2
console.log("")
console.log("*********** Exercise 2 ***********")

const capitalize = (inputString) => {
    const [first, ...rest] = inputString;
    return(first.toUpperCase() + rest.join('').toLowerCase());
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// Exercise 3
console.log("")
console.log("*********** Exercise 3 ***********")

const colors = ["red", "green", "blue"];
const capitalizedColors = (colorsArray) => colorsArray.map(color => capitalize(color));
console.log(capitalizedColors(colors));

// Exercise 4
console.log("")
console.log("*********** Exercise 4 ***********")

var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = (valuesArray) => valuesArray.filter(value => value < 20);
console.log(filterLessThan20(values));

// Exercise 5
console.log("")
console.log("*********** Exercise 5 ***********")

var array = [1, 2, 3, 4];
const calculateSum = (arrayInput) => arrayInput.reduce((previousValue, currentValue) => previousValue + currentValue);
const calculateProduct = (arrayInput) => arrayInput.reduce((previousValue, currentValue) => previousValue * currentValue);

console.log(calculateSum(array));
console.log(calculateProduct(array));

// Exercise 6
// Exercise 5
console.log("")
console.log("*********** Exercise 6 ***********")

class Car {
    constructor(make, model) {
            this.make = make;
            this.model = model;
    }
    details () {
            return `Model: ${this.make} Engine ${this.model}`;
    }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

class Sedan extends Car {
    constructor(make, model, balance) {
            super(make, model);
            this.balance = balance;
    }
    info () {
            return `${this.make} has a balance of $${this.balance}`;
    }
}
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
console.log("")