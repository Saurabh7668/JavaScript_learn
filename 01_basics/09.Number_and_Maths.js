const score = 200
// console.log(score);

const Num = new Number(100)
// console.log(Num);

// console.log(Num.toString());
// console.log(Num.toString().length);    // Its give the length.

// console.log(Num.toFixed(2));    // It's give the decimal number add to number like (2) => 100.00 like same round method.

const number = 23.7939
// console.log(number.toFixed(2));
// console.log("Its precision value", number.toPrecision(3));     // It means that 3 value + 1 add value like 23.79 = 23.79(3) => 23.8 ; 23.798(4) => 23.708
// console.log(number.toPrecision(5));


const number1 = 223.7989
const number2 = 123.7989

// console.log(number1.toPrecision(3));
// console.log(number2.toPrecision(5));

const digits = 1000000

console.log(digits.toLocaleString());  // USA currency ($, million)
console.log(digits.toLocaleString("en-DH"));  // Dubai Currency
console.log(digits.toLocaleString("en-IN"));


// ----------------------------------Maths-----------------------------------

console.log(Math);
console.log(Math.abs(-4));      // abs => absolute value   its give the actual value.
console.log(Math.abs(4));
console.log(Math.round(5.3));    // after decimal to given 3 digits
console.log(Math.floor(6.7));  // down value
console.log(Math.ceil(6.3));   // top value

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10) +1);


const min = 10;
const max = 20;
 

console.log((Math.floor(Math.random() * (max - min + 1)) + min));   // Formula 

