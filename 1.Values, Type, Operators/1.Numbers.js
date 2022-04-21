// define new number
var number = 13;

// get typeof this number
console.log(typeof(number));        // number

var floatNumber = 13.5;

console.log(typeof(floatNumber));   // number

var newNumber = '13';

console.log(typeof(newNumber));     // String

// Arithmetic

console.log(100 + 4);               // 104

console.log(100 + 4 * 10)           // 140 (Return 140 Because the computer start with 4 * 10 and after that + 100) How to solve this problem?

// But as in mathematics, you can solve this problem by change this by wrapping the addition in parentheses.
console.log((100 + 4) * 10 )        //1040

// The % symbol is used to represent the remainder operation

console.log(314 / 100);             // 3.14
console.log(314 % 100);             // 14 reminds

console.log(312 / 100);             // 3.12
console.log(312 % 100);             // 12 reminds

console.log(144 / 12);              // 12 -> (12.0)
console.log(144 % 12);              // reminds 0