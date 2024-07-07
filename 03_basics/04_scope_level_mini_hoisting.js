// function one(){
//     const name = 'Saurabh'

//     function two(){
//         const lastname = ' Chauhan'
//         console.log(name);

//         console.log(name + lastname);
//     }
//     // console.log(lastname);           // It will give the error because it is scope{} function to outside.
//     two()
// }
// one()


// function str(username){    
//     const name = 'Saurabh'      
//     function str2(program){

//         // console.log(name);
//         console.log(name);
//         const course = 'BCA' 
//         console.log(course);
//         console.log(`name is ${name} + course is ${course}`);
//     }
//     // console.log(program);       // It will give the error because it is scope{} function to outside.
//     str2() 
// }
// str()



//-------------------------Interesting methond of function ------------------------------

console.log(add(5))            // this is mini hoisting in function because I can declare in top of function 
function add(num){
    return num + 1
}
console.log(add(5))


// console.log(addTwo(5));          // It also has mini hosting in the function, but I can't declare in the top of function because it has declared addTwo variable, so it doesn't take access.
// const addTwo = function (num){          //  function expression because it declare variable.
//     return num * 2
// }
// console.log(addTwo(5));

function myFunc(theobject) {
    // mycar.make = "Toyota";
    // OR
    theobject.make = 'Mahindra - Thar'
  }
  
  // const mycar = {
  //   make: "Honda",
  //   model: "Accord",
  //   year: 1998,
  // };
  
  // console.log(mycar.make); // "Honda"
  // myFunc(mycar);
  // console.log(mycar.make); 



// function arr(thearr){
//     thearr[0] = 20
//     // thearr[2] = 30
// }

// const num = [45, 56, 78]

// console.log(num[0]);
// arr(num)
// console.log(num[0]);

// console.log(num[2]);
// arr(num)
// console.log(num[2]);


function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
console.log(factorial(5));
