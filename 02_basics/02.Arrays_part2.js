const marvals_heros = ['Iron', 'Thor', 'Spiderman']
const dc_heros = ['flash', 'superman', 'batman']

// Push => it means that add the array but add the array in array.

// marvals_heros.push(dc_heros)      

// console.log(marvals_heros);
// console.log(marvals_heros[3]);
// console.log(marvals_heros[4]);  
// console.log(marvals_heros[3][0]);


// Concat => it means that merge the all values in array.

// const all_heros = marvals_heros.concat(dc_heros)
// console.log(all_heros);

// marvals_heros.concat(dc_heros)
// console.log(marvals_heros);

// -------------------------spread methods use in Array ----------------------------

// Note :- spread methods use the multiple array add in array but spread methods same work as well as concat 

// const actors = ['Akshay', 'Hritik', 'Tiger']
// const all_new_heros = ["Spread method : ",...marvals_heros, ...actors, ...dc_heros]
// console.log(all_new_heros);


// Note => Flat array :-  Returns a new array with all sub-array elements concatnated into it recursively up to the specified depth.

const another_array = [1,2,3,4, [,5,6], 7, [8,9,10], 11, [12, 13, 14]]

// const real_another_arr = another_array.flat(Infinity)
// console.log(real_another_arr);

new_arr = ['Saurabh', 'Daksh', 'Aman']
console.log(new_arr);
console.log(Array.isArray([new_arr]))           // its give output in True and False.          
console.log(Array.from([1,2,3, 4, 5], (x) => x * x))  //  multiple value of x in value of x (square of x)  like : x = 1, x*x, =>1, x = 2, x*x => 4
console.log(Array.from(['saurabh '], (y) => y + y + y));    // add value of y in value of y.
console.log(Array.from('saurabh'));                   // separate in single qoutes.

console.log(Array.from({name: "Saurabh"}));     


let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

// console.log(Array.from({score1, score2, score3}));
console.log(Array.of(score1, score2, score3, score4));
