/** Generators **/

// Generators are created by declaring a generator function,
// whih return a generator object (e.g. g) that can then be iterated using
// Array.from(g), [...g], or for value of g.

// We use the symol * to mark a function as a generetor
// and 'yield' to emit an element sequence.
function* generator () {
    yield 'f'
    yield 'o'
    yield 'o'
}

[...generator()] // ['f', 'o', 'o']

// Generator object follow both iterable and iterator protocol.
var g = generator()
// It is an iterable because if has na @@iterator.
typeof g[Symbol.iterator] === 'function' // true
// It is an iterator because if has the .next method.
typeof g.next === 'function' // true
// The iterator for a generator is the generator itself.
g[Symbol.iterator]() === g // true

[...g] // ['f','o','o']
Array.from(g) // ['f', 'o', 'o']
for(let item of g) {
    console.log(item)
    // 'f'
    // 'o'
    // 'o'
}

// Whenever the 'yield' expression is reached, the value is emitted
// by the iterator and the function execution is suspended.
function* generator () {
    yield 'foo'
    console.log('and')
    yield 'bar'
}
 var foo = generator()

foo.next() // emits { value: 'f', done: false } and suspends
foo.next() // logs 'and', emits { value: 'bar', done: false }, and suspends
foo.next() // emits {value: undefined, done: true } and finishes

// Whenever .next() is called on a generator, there's four events can suspend the execution:
// * yield - emits the next value in the sequence
// * return - returns the last value in the sequence
// * throw - stops the execution in the generator entirely

// Use 'yield*' to delegate to other generator function.
function* generator () {
    yield* 'foo'
}

console.log([...generator()]) // ['f','o','o']
