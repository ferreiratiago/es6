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
// There are two levels at which we can iterate in Javascript:
// 1. The program level: iterating  over properties (meaning the structure of a program)
// 2. The data level: iterating over a data structure (meaning the data manage by the program)

// Some built-ins like Array, String, or arguments are iterable by default in ES6.
