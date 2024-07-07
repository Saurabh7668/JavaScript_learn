// ------------------------Constructor------------------- 

const multiply = new Function("x", "y", "return x * y");
console.log("This is constuctor : ",multiply);

// A constructor function is defined like any other function, but it is conventionally named with an uppercase letter to distinguish it from regular functions.

function person(name , age){
    this.name = name;
    this.age = age;
}

const person1 = new person("Saurabh", 21)
const person2 = new person("Daksh", 6)

console.log(person1);
console.log(person2);

// ----------------Declaration ----------------------------

function multi(x, y){
    return x * y;
} // No need for semicolon here....
multi(23, 45)
console.log("This is Declaration : ",multi(23, 45));

//  Expression => the function has its own name
const add = function add(a , b) 
{
    return a + b;
}; 
console.log("this is Expression (NameFunction)",add(34 , 40))


//------------------Expression second method-------------------
// the function is anonymous but assigned to a variable: 

const sub = function (num1, num2){
    return num1 - num2;
};
let sub_1 = sub(56, 45)
console.log("This is Expression (anonymous) : ",sub_1);

//-------------------------Arrow Function--------------------------

// Arrow functions are not hoisted, and so you cannot call them before you declare them. They are also always anonymous—there is no way to name an arrow function. 

const multiply_1 = (x , y) => x * y;
let multiply_2 = multiply_1(3, 5)
console.log("This is arrow function : ",multiply_2);

const list = ['Saurabh', 'Daksh', 'Arrav', "Ankush", "Shubham", "Arnav"]

list.forEach(list_1 =>{
    console.log("This is list : ",list_1);
})

