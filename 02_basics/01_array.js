//Array

const num = [3,4,5,4,3,32,3]
console.log(num);
// console.log(num[0]);
// console.log('toString=>', num.toString());      //print the same value of num.
// console.log(typeof num);                        // typrof Object 

// const name = ['Romen', 'John china', 'Greate Khali']
// console.log(name);




// Arrays Methods...

// num.push(4)             // add value in last position
// num.push(0)
// console.log(num);

// num.pop()           //remove last value from last position
// console.log(num);


console.log(num.shift())    // remove the first method and print the first methods.
num.shift()                 // remove the method but not print first methods.
console.log('shift method',num);

num.unshift(10);      // unshift - sift value in first position
console.log(num);

// num.unshift(25)
// console.log(num);


num.shift()         // Remove the value where unshift value have insereted or remove the value of first position. 
console.log(num);
// num.shift()
// console.log(num);


// console.log(num.includes(10));   // Include check the value from array
// console.log(num.includes(4));

// console.log('indexOF',num.indexOf(9));
// console.log('indexOF', num.indexOf(5));
// console.log('indexOF', num.indexOf(32));


const new_arr = num.join()  // join fuction create the string form.

// console.log(num);
// console.log(typeof num);
// console.log(new_arr);
// console.log(typeof new_arr);


//  Slice  and splice

console.log('a ',num);
const newArr = num.slice(1, 5)      // slice => slice method does not take last element like starting = 0, ending = 0.


// console.log(num);
// console.log('b ',typeof num.join(), num.join());

console.log(newArr);



const newArr1 = num.splice(1, 5)        // splice methods takes last digit   like staring = 0, and ending = n.
console.log("c ",newArr);
console.log(newArr1);


