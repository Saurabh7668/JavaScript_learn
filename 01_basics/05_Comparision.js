// console.log(2 == 2);
// console.log(2 >= 2);     
// console.log(3 < 2);
// console.log(3 <= 2);
// console.log(3 != 2);     // Not equal to 
// console.log(2 < 3);      
// console.log(2 <= 3);    //less than or equal to
// console.log(3 >= 2);    //Greter than or equal to
// console.log(3 > 2);


// console.log('2' > 1);
// console.log("2" <= 2);
// console.log('3' > 2);

/* The reseon is that equality check == and 
Comparisons > < >= <= work diffrently.
Comparison convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/ 

console.log(null == 0);
console.log(null != 0);
console.log(null >= 0);
console.log(typeof null);

console.log(undefined == 0);
console.log(undefined != 0);
console.log(undefined >= 0); 
console.log(typeof undefined);

// ===

// console.log('2' === 2);

console.log('num: ', '2' == 2);    // it's true if similar
let num = '2' === "2"              // it's false if not similar like that should be both string or num etc. 
console.log(typeof num)
console.log(num);
console.log(2 === 2);
