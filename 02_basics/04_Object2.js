
// const tinder = new Object()     // singleton object
// console.log(tinder);             // non singleton object 

const tinder2 = {}

tinder2.id = 101
tinder2.name = 'Shubham'
tinder2.email = 'Shubham@gmail.com'

// console.log(tinder2);

// const tinder_3 = {
//     id : 102,
//     name : 'Ankur',
//     last_name : 'Chauhan'
// }
// console.log(tinder_3);

const regular = { 
    fullname : {
        userfullname : {
            firtname : 'Saurabh',
            lastname : 'Chauhan'
        }
    }
}
// for (const [key, value] of Object.entries(regular)) 
//     {
//         console.log("It is for loop key and value=> ",`${key}, ${value}`);
//     }
    // console.log(regular);
// console.log(regular.fullname);
// console.log(regular.fullname.userfullname);
// console.log(regular.fullname.userfullname.firtname);

const obj1 = {1 : 'a', 2 : 'b', 3 : 'c'}
const obj2 = {3 : 'd', 4 : 'e', 5 : 'f'}
const obj4 = {4 : 'g', 7: 'h',  8: 'i'}
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1 , obj2)           // use of Object.assign add two objects.  
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2, ...obj4}     // Spread methods  same Object.assign 

// console.log(obj3);


const username =[
    {
        id: 1,
        name: "Saurabh",
        course : "BCA"
    },
    {
        id: 2,
        name: "Ankur",
        course : "BSC"
    },
    {
        id: 3,
        name: "Ankush",
        course : "B.Tech"
    }
]
username[1].course
// for (let [key, value] of Object.entries(username)) {
//     console.log(`${key}, ${value}`); 
// }
console.log(username[0].course);

// console.log(Object.keys(tinder2));
// console.log(Object.values(tinder2));
// console.log(Object.entries(tinder2));

// console.log(tinder2.hasOwnProperty("id"));   // check the key in Object

