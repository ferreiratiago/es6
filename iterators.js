/** Iterators **/

// Iteration is the new mechanism offer by ES6 to traversing data.

// An iterable is a data structure responsable to enable data access to the public,
//  and it does that by implementing a method whose key is 'Symbol.iterator'
//  (which is a factory for iterators)

const iterable = {
    [Symbol.iterator] () {}
}

// An iterator is a pointer for traversing the elements of a data structure.

// Under the wood JS has a method called @@iterator,
// By using the well-known Symbol.iterator we can assign an iterator to this method.
// @@iterator is called once, whenever an object needs to be iterated (e.g. for..of loop)
// @@iterator will be asked for an iterator.
// The returned iterator is then used to obtain the values of the object.

// The iterator protocol has to define how to get values out of an object.
// We need to define an @@iterator that satisfies that.

// The iterator protocol indicates that we must have an object with a 'next' method.
// The 'next' method has no arguments and returns an object with two properties:
// * done - true if the sequence has end, false otherwise.
// * value - the current item in the sequence

const iterable = {
    [Symbol.iterator]() {
        const items = ['f', 'o', 'o']
        const iterator = {
            next () {
                return {
                    done: items.length === 0,
                    value: items.shift()
                }
            }
        }

        return iterator
    }
}

for(let item of iterable) {
    console.log(item)
    // f
    // o
    // o
}

// Objects are not iterable by default. Why?
// The good reason for this is that there are two levels at which we can iterate in Javascript, mainly:
// 1. The program level: iterating over object properties that represent program structure.
//      For instance, for(let e in [1,2,3]) console.log(e), prints 0,1,2, which are the array indexes.
//      These indexes represent program structure.
// 2. The data level: iterating over a data structure and extract all meaninfull data.
//      For instance, for(let e of [1,2,3]) console.log(e), prints 1,2,3, which is the array data.
//
// Although this distinction (program vs data) can be implemented in a controlled structure, such as
//  Array or String, there is no meaninfull way to implement the iteraction protocol for an object.
// If objects were iterable by default, then program and data would be mixed up.
// Since every type in Javascript is based on a plain object this would apply to Array and String,
//  which means that program properties such as 'push' and 'length' would be listed alongs
//  with the data.
