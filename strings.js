/** Strings **/

// String manipulation
// .startsWith(searchString[, position])
// Determines if a string beings with the specified characters
// at the specific position.
'foo & bar'.startsWith('foo')    // true
'foo & bar'.startsWith('bar')    // false
'foo & bar'.startsWith('bar', 6) // true

// .endsWith(searchString[, position])
// Determines if a string ends with the specified characters
// at the specific position.
'foo & bar'.endsWith('bar')    // true
'foo & bar'.endsWith('foo')    // false
'foo & bar'.endsWith('foo', 3) // true

// .includes(searchString[, position])
// Determines if a string can be founds within another string.
'Mr.foo'.includes('foo')   // true
'Mr.foo'.includes('bar')   // false
'Mr.foo'.includes('Mr', 2) // false

// .repeat(count)
// Returns a new string containing the specified
// number (count) of copies.
'foo'.repeat(2) // 'foofoo'

// [Symbol.iterator]
// Returns a new Iterator object that iterates over
// each code character or its code point representation.
var iterator = 'ABC'[Symbol.iterator]()

console.log(iterator.next().value); // 'A'
console.log(iterator.next().value); // 'B'
console.log(iterator.next().value); // 'C'

var iterator = 'A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A'[Symbol.iterator]()

console.log(iterator.next().value); // 'A'
console.log(iterator.next().value); // '\uD835\uDC68'
console.log(iterator.next().value); // 'B'

// Unicode
// .codePointAt(position)
// Returns the unicode of the character at the specified position.
'Foo'.codePointAt(0) // 70

// .fromCodePoint(num1[, ...[, numN]])
// Returns the string created by the specified
// sequence of code points.
String.fromCodePoint(70, 111, 111) // 'Foo'

// .normalize([form])
// Returns a Unicode Normalization Form of a give string.
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
