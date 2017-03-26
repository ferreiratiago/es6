/** Array **/

// .from()
// Creates a new Array from an array-like or iterable object.
var foo = ['f', 'o', 'o']
Array.from(foo)   // ['f', 'o', 'o']
Array.from('foo') // ['f', 'o', 'o']

// .of()
// Create a new Array from a variable number of arguments.
Array.of(3) // [3]
// Which differs from:
Array(3) // [ , , ]

Array.of(3, 'foo', {}) // [ 3, 'foo', {} ]
// Which is equal to:
Array(3, 'foo', {}) // [ 3, 'foo', {} ]
