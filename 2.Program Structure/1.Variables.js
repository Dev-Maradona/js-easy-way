let mood = "light";     // Define variable

console.log(mood);      // light

mood = "dark";          // Change variable

console.log(mood);      // dark

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name); // → Hello Ayda

// Words with a special meaning, such as let, are keywords, and they may not be used as binding names

// break case catch class const continue debugger default
// delete do else enum export extends false finally for
// function if implements import interface in instanceof let
// new package private protected public return static super
// switch this throw true try typeof var void while with yield

/* Functions */

let x = 30;
console.log("the value of x is", x);
// → the value of x is 30

console.log(Math.max(2, 4));    // return 4

console.log(Math.min(2, 4) + 100); // → 102

/* Control flow */

// let theNumber = 15;
// console.log("Your number is the square root of " + theNumber * theNumber);

/* Conditional execution */

// let theNumber = 15;
// if (!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " +
//         theNumber * theNumber);
// }

if (1 + 1 == 2) console.log("It's true"); // → It's true

let theNumber = 15;
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " +
        theNumber * theNumber);
} else {
    console.log("Hey. Why didn't you give me a number?");
}


let num = 15;               // Defina a number

if (num < 10) {             // Condition
    console.log("Small");
} else if (num < 100) {     // Condition
    console.log("Medium");
} else {                    // Something else
    console.log("Large");
}

/* while and do loops */