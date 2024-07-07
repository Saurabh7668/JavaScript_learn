
function number(num1){
    return num1
}
console.log(number(20, 10, 20, 330, 40, 30));      // it will not print multi value.

// used the " rest like => (...) " function or we call spread function in object. rest function will be print in array.

function number1 (...num2){
    return num2
}
console.log(number1(20, 300, 400, 503, 4, 23, 23));

// object in function

const name = {
    username : 'Kalyan ',
    lastname : 'Singh ',
    age : 21
}
function object_name(anyName_object){
    console.log(`username is ${anyName_object.username} and lastname is ${anyName_object.lastname} and age is ${anyName_object.age}. `);
}
object_name(name)



// Multi object apply in function. 

const name1 = {
    username : 'Kalyan ',
    lastname : 'Singh ',
    age : 21
}
const id = {
    user_id : 'E0101',
    salary : 150000,
}
const info = {
    address : 'sector 132, Noida',
    city : 'Noida',
    Distict : 'Gautam Buddha Nagar'
}

function object_name1(name1, anyobject, info_1){
    console.log(`UserId is ${anyobject.user_id} and Salary is ${anyobject.salary}. Username is ${name1.username} and lastname is ${name1.lastname} and age is ${name1.age}. My address is ${info_1.address} , My city is ${info_1.city}, my distict is ${info_1.Distict} `);
}
object_name1(name1, id, info)


const arr = [200 , 300, ' Saurabh', ' Ankur', ' Sandeep', 400, 500]

function arr_name(anyArray){
    // console.log(`My array is ${arr}. `)
    return anyArray
    // return anyArray[1]
}
// arr_name(arr)
console.log('My array is ',arr_name(arr))
// console.log('my array ---',[200, 300, 'Saurabh', 'Sandeep', 400, 'ANkur']);
