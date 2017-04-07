/** Sets **/

// Sets are iterable.
// Set constructor accepts an iterable.
// e.g. [keyOne, keyTwo]
var set = new Set(['foo', 'bar'])

console.log(set) // Set { 'foo', 'bar' }

// Keys must be unique.
set.add('foo')
set.add('foo')
// If the value already exists.
// It will not be added again.
console.log(set) // Set { 'foo', 'bar' }

// Property .size
console.log(set.size) // 2

// .keys()
// Returns a new Iterator object containing the keys
// for each element in the Set, in insertion order.
var keysIterator = set.keys() // SetIterator { 'foo', 'bar' }

console.log(keysIterator.next().value) // 'foo'
console.log(keysIterator.next().value) // 'bar'

// .values()
// The same as the .keys() function and returns an Iterator object
// containing the values for each element in the Set, in insertion order.
var valuesIterator = set.values()

console.log(valuesIterator.next().value) // 'foo'
console.log(valuesIterator.next().value) // 'bar'

// .entries()
// Returns a new Iterator object containing an array of [value, value]
// for each element in the Set, in insertion order.
// This structure is to keep Sets like Map objects, [key, value], however
// because Sets have no keys this returns an array of [value, value].
var entriesIterator = set.entries()

console.log(entriesIterator.next().value) // ['foo', 'foo']
console.log(entriesIterator.next().value) // ['bar', 'bar']

// .add()
// Adds a new element into the Set object.
set.add('zed')

console.log(set) // Set { 'foo', 'bar', 'zed' }

// .has()
// Checks if an element exists on the Set.
console.log(set.has('zed')) // true

// .delete()
// Remove an element from the Set.
set.delete('zed')

console.log(set) // Set { 'foo', 'bar' }
