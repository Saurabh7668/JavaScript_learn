// Object Singleton

// Object.Create

// Object Literal

const JsUser = {
    name : "Saurabh",
    age : 21,
    location : 'Noida',
    email : 'saurabh@gmail.com'
}
// console.log(JsUser);
// console.table(JsUser)
// console.log(JsUser.email);
// console.log(JsUser['age']);



// Use of Symbol ......

const mysym = Symbol("new_name") 

const new_obj = {
    name : 'Daksh',
    age : 6,
    [mysym] : "Symbol method",
    location : "Shamli",
    email : "daksh@gmail.com"
}
// console.log("symbol => ",new_obj.mysym);      //Symbol intersting methods ....
// console.log(" this is symbol =>" ,new_obj[mysym]);
// console.log("for symbol =>",new_obj);


// ......... change object .......

new_obj.email = "daksh@microsoft.com"
new_obj.name = "Shubham"
new_obj[mysym] = 'sym - method' 
// console.log("Edit Object => ",new_obj);


// ........Lock object (object freeze)........

// Object.freeze(new_obj)                   // This is lock method of object  
// new_obj.email = "daksh@google.com"       // It will not print this email_id because this is lock object...
// console.log(new_obj);

new_obj.email ="Saurabh@gmail.com"          // Obj. Freeze method can not change email.
console.log(new_obj);

//*************************************** function ****************************************

// JsUser.greeting = function(){
//     console.log("hello Chauhan ");
//     console.log(`Hii.. ${JsUser.name}`);
// }
// JsUser.greeting()
// console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hii ${this.name}`);
}
// JsUser.greeting2()
// console.log(JsUser.greeting2());


new_name1 = function()                   // function expression...(new_name1)
{
    console.log(`Hi ${this.new_name1}`);
}
// new_name1()
// console.log(new_name1());

const name = {
    last: 'exists',
  };
//   console.log(name)
//   console.log(Object.hasOwn(name, "last"))

const name1 = {
    name : "Saurabh",
    program : "BCA"
}

for(const [key, value] of Object.entries(name1)){
    console.log(`${key}, ${value}`);
}


