// ................Function syntax................

/* function funName(){
    // code to be execute.
}

*/

// function myfun(){
//     console.log("S");
//     console.log("A");
//     console.log("U");
//     console.log("R");
//     console.log("A");
//     console.log("B");
//     console.log("H");   
// }
// myfun()


function add1(a, b){             
    // console.log(a + b);       // for print the value in program 
    return a + b;
}
add1(3, 5)                     // add1 is a reference  and add1() is execution.
// console.log(add1(3,5));      // for print the value in program 


function sub(n1 , n2){
    return n1 - n2
}
const subtract = sub(9.453, 3.467)
// console.log(subtract);


// function is a keyword;
// add1 is a function_Name;
// add1(a, b) is a parameter;
// add1(3, 5) is a arguments;
// add1 is a reference;
// add1() is a execution;


function myfun1(num1, num2){
    //  console.log(num1 + num2); 
}
myfun1(3, 2)
myfun1(3, ' a')


function myname(num1 , num2){
    let result = num1 + num2;
    // console.log("Saurabh");             // It's valid before return and print 
    return result;
    // console.log("Saurabh");     // it's not valid after return 
}
const result2 = myname(13, 5)
// console.log('result: ', result2);


function addNum(num1, num2, num3 ){
    return num1 * num2 - num3
}
const result = addNum(3,5,6)
// console.log('result: ',result);


function add2 (a, b, c){
    return a + b *c;
}
const result1 = add2(3, 5, 4)    
// console.log(result1);


function multi(x, y){
    return x + y;
}
let solve  = multi('Saurabh', ' Chauhan');
// console.log(solve);


const d = new Date()
month = d.setFullYear(2020)
console.log(month);

// function name(num1 , num2){
//     console.log(num1, num2);
    // return num1 + num2;
// }
// console.log(name('Saurabh' ,'Chauhan') )



function name1(username){
    if(username === undefined){
        console.log('please write the username');
        return 
    }
    return username;
}
console.log('if condition function: ',name1('Chauhan'));

const name2 = name1('Chauhan')
console.log("Username : ",name2);
