/* Operator */

// > (greater than)
// < (less than)
// == (equal to)

// This will return true of false (Boolean)

console.log(3 > 2)      // → true
console.log(3 < 2)      // → false
console.log(typeof(3 < 2))  // → boolean


// Strings can be compared in the same way.

console.log("Ah" < "Mohamed")   // → true

/* Other similar operators: */ 
// >= (greater than or equal to)
// <= (less than or equal to)
// == (equal to), and != (not equal to).

console.log("Itchy" != "Scratchy")  // → true
console.log("Apple" == "Orange")    // → false
console.log('Ahmed' == "Hamed")     // → false (Not checking length But check the value is equal to another value or not)


// There is only one value in JavaScript
// that is not equal to itself, and that is NaN (“not a number”).

console.log(NaN === NaN);           // false

/* Logical operators */

// There are also some operations that can be applied to Boolean values themselves.
// JavaScript supports three logical
// operators: and, or, and not. These can be used to “reason” about Booleans

console.log(true && false);         // → false
console.log(true && true);          // → true

// The || operator denotes logical is "or"

var variableOne = true;
var variableTwo = false;

if (variableOne == true || variableTwo == true) {       // Check if variableOne is true, Or variableTwo
    console.log('One of them is true');
}

// conditional operator
// Simple it's if conditional
// somethingIsTrue ? doSomething : doSomethingElse
// if (true) { /*doSomething*/ } else { /*doSomethingElse*/ }
// It is written with a question mark and a colon, like this:
console.log(true ? 1 : 2);  // → 1
console.log(false ? 1 : 2); // → 2

// There are two special values, written null and undefined,
// that are used to denote the absence of a meaningful value.
// They are themselves values, but they carry no information.

var thisIsNull = null;
var thisIsUndefined = undefined;