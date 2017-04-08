/** Number **/

// Binary Literals.
// 0b prefix for binary literals.
console.log(0b001) // 1
console.log(0b010) // 2

// Octal Literals.
// 0o prefix for octal literals.
console.log(0o001) // 1
console.log(0o010) // 8

// .isNaN()
// Determines if the provided value is NaN and its type is Number.
Number.isNaN(NaN)       // true
Number.isNaN(0/0)       // true
Number.isNaN('a' * 'b') // true

Number.isNaN(1)         // false
Number.isNaN('foo')     // false
Number.isNaN(undefined) // false

// .isFinite()
// Determines if the provided value is a finite number.
Number.isFinite(Infinity)   // false
Number.isFinite(-Infinity)  // false
Number.isFinite(NaN)        // false

Number.isFinite(0)      // true
Number.isFinite(0b001)  // true
Number.isFinite(0o001)  // true

Number.isFinite('0')    // false, would be true with global isFinite('0')
Number.isFinite(null)   // false, would be true with global isFinite(null)

// .parseInt()
// Parses a String to an integer in the specified radix.
// Has exactly the same functionality as the global parseInt().
Number.parseInt('10', 2)  // 2
Number.parseInt('10', 8)  // 8
Number.parseInt('10', 10) // 10

// .parseFloat()
// As for parseInt, Number.parseFloat() has exactly the same
// functionality as the global parseFloat().

// .isInteger()
// Determines if the provided value is a finite number
// without a decimal part.
Number.isInteger(Infinity)  // false
Number.isInteger(-Infinity) // false
Number.isInteger(NaN)       // false
Number.isInteger(undefined) // false
Number.isInteger(null)      // false

Number.isInteger(0)     // true
Number.isInteger(2.75)  // false
Number.isInteger(-5)    // true

// Number.EPSILON
// Which represents the smallest positive value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON

// Number.MAX_SAFE_INTEGER
// Which represents the largest integer that
// can be safely and precisely represented in JavaScript.

// Number.MIN_SAFE_INTEGER
// Which represents the smallets integer that
// can be safely and precisely represented in JavaScript.

// Number.isSafeInteger
// Returns true for any integer between
// [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].
