/**
 * The next basic data type is the string. Strings are used to represent text
*/


// You can use single quotes,
// double quotes, or backticks to mark strings,
// as long as the quotes at the start and the end of the string match.

var string1 = `Down on the sea`       // String

var string2 = "Lie on the ocean"      // String

var string3 = 'Float on the ocean'    // String

// Problem: If I want to press enter and write more than line what should I do ?

// Solve: quoted with backticks (`).

var string4 = 
`
    Now
    We 
    Solve
    The Problem
`

// Another Solve: by \n

"This is the first line\nAnd this is the second"

// concatenates strings

// + it glues two strings together.

"con" + "cat" + "e" + "nate"

// template literals => can do a few more tricks.
// Apart from being able to span lines, they can also embed other values.

console.log(`half of 100 is ${100 / 2}`);   // half of 100 is 50

// Boolean values

console.log(3 > 2)      // → true
console.log(3 < 2)      // → false
console.log(typeof(3 < 2))  // → boolean