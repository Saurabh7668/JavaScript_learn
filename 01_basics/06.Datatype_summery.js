// Two types of data type

// --------------------------------------------- 1. Primative---------------------------------------------------

//  7 types = String, Number, Boolean, Null, Undefined, Symbol, BigInt, 

// const Name = 'Saurabh';
// console.log(Name);
// const score = 33;
// console.log(score);
// const isLoggedIn = false;
// console.log(isLoggedIn);
// const outsideTemp = null;
// console.log(outsideTemp);
// let userName;                   // undefined
// console.log(userName);

// const bigInt = 2379237732978732

const id = 123
const anotherId = '123'

// console.log(id);
// console.log(typeof id);
// console.log(anotherId);
// console.log(typeof anotherId);



// -------------------------------------2. Non-Primative (Refrence)--------------------------------------------

// Array :
const hero = ['Saurabh', 'Himanshu', "Ankur", "Daksh", "Shubham","Sandeep"]
// console.log(hero);
// console.log(typeof hero);



//  Object :

let myobj = {
    name : 'Saurabh',
    age : 21,
    College : 'BCA',
}

// console.log(myobj);
// console.log(typeof myobj);

// let add_1 = myobj
// add_1.name = 'Aman chauhan'         // We will change of name's myobj
// console.log(myobj);
// console.log(add_1);

let heobj = {
    name : 'Daksh',
    age : 6
}

let push_1 = heobj
push_1.place = 'Delhi'      // add the value in heobj 

heobj.lastname = 'Chauhan' // add the value in heobj.

let add_2 = heobj
add_2.College = 'Galgotias University '

let add_3 = heobj
add_3.City = 'Greater Noida'

// console.log(heobj);
// console.log(push_1);     // add same value in variable  add_3 and 



// ************************************ Function *************************************

const myFunction = function(){               // It is expression function because declare variable in function. 
 console.log("Hello World");
}
myFunction()
// console.log(myFunction());

console.log(typeof myFunction);



function func()
{
    console.log("hello......");
}
func()




