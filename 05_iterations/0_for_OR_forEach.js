// ------------------------for Loop---------------------------

// For Loop =>  for loop is used to iterate through the array or the elements for a specified number of times.

// ---------------------Syntax For loop ------------------------

// for(initialization; condition; increment / decrement)
//     {
//         code be execute 
//     }

// --------------------Example ----------------
for(i=0; i<5; i++)
    {
        console.log(i);
    }


// ----------------------ForEach loop ----------------------

// The forEach() method is also used to loop through arrays, but it uses a function differently than the classic “for loop”. It passes a callback function for each element of an array together with the below parameters:

// Current Value (required): The value of the current array element
// Index (optional): The index number of the current element
// Array (optional): The array object the current element belongs to
// We need a callback function to loop through an array by using the forEach method.

// Syntax:


const numbers = [1,2,4,5,3,4] 

numbers.forEach(num1 => {
    console.log("this is forEach loop : ",num1);
});

numbers.forEach(function(number){
    console.log("This is for loop but used function anonymous ", number);
})