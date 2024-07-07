const mydate = new Date(5/8/2024)
// console.log('mmydate =>',mydate);
// console.log('toString=>', mydate.toString());
// console.log(typeof mydate)       // Object type


// console.log("JSON method : ", mydate.toJSON());  
// console.log(mydate.toLocaleDateString());  
// console.log("TrimString Method :",mydate.toTimeString());
// console.log(mydate.getTimezoneOffset());    
// console.log(mydate.toUTCString());

// console.log('JSON =>',mydate.toJSON());


// let createDate = new Date(2024);
let createDate = new Date(2024, 0, 23, 5, 35);
// console.log(createDate.toString());

// console.log(createDate.toLocaleString());
// console.log(createDate.toLocaleDateString());

// console.log(mydate.toString());   // for today date show this method.

//---------------------------Time----------------------

const time1 = Date.now();

// console.log(time1);

// console.log(time1.toLocaleString());

// console.log(time1.toFixed());
// console.log(createDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let new_date = new Date(2003, 4, 15, 2, 10)

console.log(new_date.toString());   

console.log(new_date);
console.log(new_date.getDay());
console.log(new_date.getMonth());
console.log(new_date.getFullYear());
console.log(new_date.getDay());




