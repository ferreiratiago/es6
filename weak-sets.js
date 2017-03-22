/** Weak Sets **/

// WeakSets are not iterable, i.e. there is no iterable protocol.

// Every key must be a unique object reference.
// If a value is not referenced by nothing else
// then it would be garhabe collected.

// We can still use iterables on the constructor.
var set = new Set(['foo'])

console.log(set) // Set { 'foo' }

// .add()
// Adds a new element into the Set object.
set.add('bar')

console.log(set) // Set { 'foo', 'bar' }

// .has()
// Checks if an element exists in the Set object.
console.log(set.has('foo')) // true

// .delete()
// Removes an element from the Set object.
set.delete('bar')

console.log(set) // Set { 'foo' }

// Why should we use it?
// The answer is garbage collection.
// Because the values are weakly store, this means that if
// there are no other references to the values,
// then they are subject to garbage collection.
