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

// .copyWithin(target, start, end)
// Copies part of an array (start-end)
// to another location (target) in the same array.
Array(1, 2, 3, 4).copyWithin(2)        // [ 1, 2, 1, 2 ]
Array(1, 2, 3, 4).copyWithin(2, 1)     // [ 1, 2, 2, 3 ]
Array(1, 2, 3, 4).copyWithin(2, 0, 1)  // [ 1, 2, 1, 4 ]
// It's worth reading:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin

// .fill(value, start, end)
// Fills all elements in the array (start-end)
// with the provided value.
Array(3).fill('foo')        // [ 'foo', 'foo', 'foo' ]
Array(3).fill('foo', 1)     // [ , 'foo', 'foo' ]
Array(3).fill('foo', 1, 2)  // [ , 'foo',  ]

// .find(callback)
// Returns the first element in the array
// that satisfies the condition.
function isEven(value) {
    return value % 2 === 0
}

Array(1,2,3,4).find(isEven) // 2

// .findIndex(callback)
// Returns the index of the first element in the array
// that satisfies the condition.
Array(1,2,3,4).findIndex(isEven) // 1 <- index of element 2

// Iterators
// .keys()
// Returns a new Array Iterator that contains the keys
// for each index in the array.
var iterator = [ 'foo', 'bar', 'zed' ].keys()
console.log(iterator.next().value) // 0
console.log(iterator.next().value) // 1
console.log(iterator.next().value) // 2

// .values()
// Returns a new Array Iterator that contains the values
// for each index in the array.
var iterator = [ 'foo', 'bar', 'zed' ].values()
console.log(iterator.next().value) // 'foo'
console.log(iterator.next().value) // 'bar'
console.log(iterator.next().value) // 'zed'

// .entries()
// Returns a new Array Iterator that contains the pairs
// [ key, value ] for each index in the array.
var iterator = [ 'foo', 'bar', 'zed' ].entries()
console.log(iterator.next().value) // [ 0, 'foo' ]
console.log(iterator.next().value) // [ 1, 'bar' ]
console.log(iterator.next().value) // [ 2, 'zed' ]
