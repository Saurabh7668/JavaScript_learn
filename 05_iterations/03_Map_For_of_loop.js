// for of

// ["", "", ""]
// [{}, {}, {}]

// Syntax for:of loop 
// for (const iterator of ended) {
//   console.log(ended);
// }

const arr = [1, 2, 3, 4, 5, 1, 2]

for (const num of arr) {
    // if(num > 3){
    //     console.log("It is large number to 3 :- ",num);
    //     break
    // }

    // if(num < 3){
    //     console.log("It is small number to 3 :- ",num);
    //     continue
    // }
    
    console.log(num);
}

// const greetings = "Hello world!"
// for (const greet of greetings) {
   
//     if(greetings == "e"){
//         console.log('stop on 5',greet);
//     } 
//     console.log(`Each char is ${greet}`) 
// }


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {                        //It execute because is for_of methods but It does not execute of object methods. 
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {                      // myObject is not iterable because it is object method.
//     console.log(key, ':-', value);  
// }