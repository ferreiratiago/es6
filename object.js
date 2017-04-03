/** Object **/

// .assign(target, ...sources)
// Copies the values of all enumerable properties from on
// or more source objects to the target
// and returns the target's object reference.
Object.assign({}, { foo: 'Mr.Foo' }, { bar: 'Mr.Bar' }) // { foo: 'Mr.Foo', bar: 'Mr.Bar' }
Object.assign({ foo: 'Mr.Foo' }, { foo: 'Foo' }) // { foo: 'Foo' }

// .is(value1, value2)
// Determines if two objects are the same.
Object.is([], [])  // false
Object.is({}, {})  // false
Object.is(0, -0)   // false

Object.is('foo', 'foo') // true
Object.is(null, null)   // true

// == vs === vs Object.is
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// .getOwnPropertySymbols(obj)
// Retuns an array with all the properties that are symbols.
var objectSymbols = Object.getOwnPropertySymbols({
    [Symbol('foo')]: 'Mr.Foo',
    [Symbol('bar')]: 'Mr.Bar'
}) // [ Symbol(foo), Symbol(bar) ]

console.log(objectSymbols.length) // 2
console.log(objectSymbols[0])     // Symbol(foo)

// .setPrototypeOf(obj, prototype)
// Sets the prototype of the specified object to another prototype.
var foo = {}
Object.setPrototypeOf(foo, null)
console.log(Object.getPrototypeOf(foo)) // null
