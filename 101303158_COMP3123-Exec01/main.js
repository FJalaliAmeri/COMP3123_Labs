"use strict";

//Exercise 1
let stringForEx1 = "using the capital functions we will turn the first letter of each word into capital letter";

function capital(stringInput) {
    console.log(`Test: ` + stringInput);

    let arrayOfWords = stringInput.split(" ");

    for (let i = 0; i < arrayOfWords.length; i++) {
        arrayOfWords[i] = arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1);
    }
    
    console.log(`Result: ` + arrayOfWords.join(" "));
}

console.log("Exercise 1:");
capital(stringForEx1);
console.log("");

//Exercise 2

function max(num1, num2, num3) {
    let maxNum; 
    if(num1 >= num2 && num1 >= num3) {
        maxNum = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        maxNum = num2;
    } else {
        maxNum = num3;
    }
    console.log(`numbers are: ${num1}, ${num2}, ${num3}`);
    console.log(`The largest number is: ` + maxNum);
}

console.log("Exercise 2:");
max(1,0,1);
max(0,-10,-20);
max(1000,510,440);
console.log("");

//Exercise 3

function right(stringInput) {
    if (stringInput.length >= 3) {
        stringInput = stringInput.slice(-3) + stringInput.slice(0, -3);
        console.log(stringInput);
    } else {
        console.log(stringInput);
    }
}

console.log("Exercise 3:");
right("Python");
right("JavaScript");
right("Hi");
console.log("");

//Exercise 4

function angleType(angle) {
    if(angle < 90) {
        console.log(`${angle} is an Acute angle`);
    } else if(angle === 90) {
        console.log(`${angle} is a Right angle`);
    } else if(angle < 180) {
        console.log(`${angle} is an Obtuse angle`);
    } else if(angle === 180) {
        console.log(`${angle} is a Straight angle`);
    }
  }

console.log("Exercise 4:");
angleType(47);
angleType(90);
angleType(145);
angleType(180);
console.log("");
