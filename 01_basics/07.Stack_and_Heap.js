/* Stack (Primitive) = It is Copy type and it allow static data type or fixied size. 
It allow the limitation. it's primiive type.

Heap (Non-Primitive) = It is Reference type. It allow dynamic data type. 
It does not allow limitation. It's non-primitive type. */


//  Stack
let myCollegeName = "Galgotias University"

let anotherCollegename = myCollegeName;

anotherCollegename = "Delhi University"

console.log(anotherCollegename);


// Heap

let userOne = {
    email: "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;
userTwo.email = "guru@gmail.com"
userTwo.upi = 'guru@ybl'


console.log(userTwo);


