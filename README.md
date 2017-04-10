#  ECMAScript 2015 (ES6)
* [Destructuring Assignment](#destructuring-assignment)
* [Arrow Functions](#arrow-functions)
* [Blocks](#block-scope)
* [Let && Const](#let--const)
* [Template Literals](#template-literals)
* [Object Literals](#object-literals)
* [Spread Operator](#spread-operator)
* [Classes](#classes)
* [Iterators](#iterators)
* [Generators](#generators)
* [Symbols](#symbols)
* [Promises](#promises)
* [Maps](#maps)
* [Weak Maps](#weak-maps)
* [Sets](#sets)
* [Weak Sets](#weak-sets)
* [Proxies](#proxies)
* [Number](#number)
* [Array](#array)
* [Object](#object)
* [Strings](#strings)
* [Modules](#modules)

## Destructuring Assignment

`Destructuring assignment` allow us to assign properties of arrays or objects to variables.

### Examples

#### Objects
```js
var obj = {
    foo: 'Mr.Foo',
    bar: 'Mr.Bar'
}

var { foo } = obj               // var foo = obj.foo
var { foo: bar } = obj          // var bar = obj.foo
var { foo = 'default' } = {}    // var foo = ({}).foo || 'default'
var { foo, bar } = obj          // var foo = obj.foo; var bar = obj.bar
var { foo } = {}                // var foo = undefined
var { foo: { bar: deep } } = { foo: { bar: 'bar' } } // deep = 'bar'
var { foo: { bar } } = {}       // ERROR - {}.foo.bar does not exits
```

#### Arrays
```js
var [a,b] = [6,3]       // var a = [6,3][0]; var b = [6,3][1]
var [a, ,c] = [6,9,3]   // var a = [6,9,3][0]; var c = [6,9,3][2]
var [a,b] = [b,a]       // var a = [b,a][0]; var b = [b,a][1]
```

#### Functions
```js
// Parameter with default value.
var foo = function (bar = 2) {
    console.log(bar)
}
foo()   // 2
foo(3)  // 3

// Parameter with default value object.
var foo = function (bar = {a: 1, b: 2}) {
    console.log(bar)
}
foo()       // {a: 1, b: 2}
foo({a: 3}) // {a: 3}

// Parameter object with default values.
var foo = function ({a = 1, b = 2}) {
    console.log(a)
    console.log(b)
}
foo()       // ERROR - No default when object is not provided.
foo({})     // 1, 2
foo({a: 3}) // 3, 2

// Parameter object (with default values) and default value.
var foo = function ({a = 1, b = 2} = {}) {
    console.log(a)
    console.log(b)
}
foo()       // 1, 2
foo({})     // 1, 2
foo({a: 3}) // 3, 2
```

### Further Reading
* [MDN - Destructuring Assignment](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [ExploringJS - Destructuring](http://exploringjs.com/es6/ch_destructuring.html)

## Arrow Functions

`Arrow function` is a shorter syntax for the common [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function).
The cool thing about it is that it doesn't bind its own [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments), [super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) or [new.target](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target).

### Examples

```js
var increment = (value) => {
    return value + 1
}
increment(3) // 4
```

#### Block Scope
```js
var increment = (value) => value + 1  // Remove the {} from the function body.
increment(3) // 4

var increment = value => value + 1    // Removed the () from the value parameter.
increment(3) // 4
```

#### Object Returning
```js
// The return statement needs to be wrapped on '()'.
var foo = () => ({
    value: 3
})
foo() // { value : 3 }
```

#### this
```js
// "this" is bound to the scope.
this.bar = 3

// ES5
function foo() {
    return bar
}
foo() // Error - bar undefined

// ES6
var foo = () => this.bar
foo() // 3
```

### Further Reading
* [MDN - Arrow Functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [ExploringJS - Arrow Functions](http://exploringjs.com/es6/ch_arrow-functions.html)
* [PonyFoo - Arrow Functions in Depth](https://ponyfoo.com/articles/es6-arrow-functions-in-depth)

## Block Scope

`Blocks` are the way to create the common [Immediately Invoked Function Expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE).

### Examples
```js
// ES5
// In order to have a block scope, we would use
// IIFEs (Immediately Invoked Function Expression).
(function IIFE () {
    // Begin block scope
    var foo = 'Mr.Foo'
    // End block scope
})()

foo // Reference Error

// ES6
// Use {} + let or const for block scope
{
    // Begin block scope
    var zed = 'Mr.Zed'
    let foo = 'Mr.Foo'
  const bar = 'Mr.Bar'
    // End block scope
}
zed // Mr.Zed
foo // Reference Error
bar // Reference Error
```

### Further Reading
* [WESBOS ES6 Block Scope IIFE](http://wesbos.com/es6-block-scope-iife/)

## Let && Const

`Let` and `Const` are alternative ways to `var`.
Although both `let` and `const` are block-scoped (instead of function scoped) a variable declared with `let` can be reassigned as for `const` is not possible to reassign.

### Examples

#### Let
```js
let foo = 'Mr.Foo'

// Let variables:
//  - are block-scoping (i.e. they live in their defined block.)
//  - can be reassigned.

function func (flag) {

    if(flag) {
        // new block scope
        let foo = 'NewFoo'

        return foo
        // end block scope
    }

    return foo
}

func(true)  // NewFoo
func(false) // Mr.Foo
```

#### Const
```js
const foo = 'Mr.Foo'

// Const variables:
//  - are block-scoping.
//  - can't be reassigned (assignment is immutable.)

foo = 'NewFoo' // ERROR - No new assignment allowed.

// An interesting example
const bar = { a : 3 }

bar = { b : 7} // error - No new assignment allowed.
bar.a = 7 // OK - We are updating a property, not the assignment.
```

### Further Reading
* [2ality - Variables and Scoping in ECMAScript 6](http://2ality.com/2015/02/es6-scoping.html)
* [MDN - Const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) and [MDN - let](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let)
* [PonyFoo - ES6 Let, Const and the “Temporal Dead Zone” (TDZ) in Depth](https://ponyfoo.com/articles/es6-let-const-and-temporal-dead-zone-in-depth)

## Template Literals

`Template literals` allows us to easily build string values with expressions on it.

### Examples
```js
`ES6 Template String`

// String wrapped into ""
`Double "quote"` // Double "quote"

// String wrapped into ''
`Single 'quote'` // Single 'quote'

// Multiple line
`Multiple
Line`
```

#### Interpolation
```js
`${1 + 2}` // 3

const foo = 'MrFoo'
`Hello ${foo}`      // Hello MrFoo

const bar = () => 'MrBar'
`Hello ${bar()}`    // Hello MrBar
```

#### Build Template
```js
const mr = (template, ...expressions) => {
    // template is an Array broke at the interpolations
    // e.g. for `foo {$a} bar {$b}`
    // template = ['foo ', ' bar ', '']
    return template.reduce((result, current, index) => {
        return `${result}Mr.${expressions[index - 1]}${current}`
    })
}

const foo = 'Foo'
const bar = 'Bar'

mr`Dear ${foo} and ${bar}` // Dear Mr.Foo and Mr.Bar
```

### Further Reading
* [MDN - Template Literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)
* [ExploringJS - Template Literals](http://exploringjs.com/es6/ch_template-literals.html)
* [PonyFoo - ES6 Template Literals in Depth](https://ponyfoo.com/articles/es6-template-strings-in-depth)

## Object Literals

`Object literals` are a simple lists of key properties with a pair value (i.e. key:value).

### Examples
```js
// Property value shorthand
const foo = 'Mr.Foo'

{
    // Because the property 'foo' has the
    // same name as the const 'foo'
    // no need to write { foo: foo }
    foo
}

// Computed properties
{
    // [ value to compute to property ] : value
    [ 1 + 3 ] : 'Number 4'
}

// Method definition
{ bar () {
    // Code for function bar
  }
}
```

### Further Reading
* [MDN - Grammar and Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals)
* [PonyFoo - ES6 Object Literal Features in Depth](https://ponyfoo.com/articles/es6-object-literal-features-in-depth)

## Spread Operator

The `spread operator` allow us to expanded an expression into multiple variables (i.e. destructuring assignment) or multiples variables (i.e. array literals) or multiple arguments (i.e. function calls.)

### Examples

### Destructuring Assignment
```js
[foo, , ...rest] = [1,2,3,4,5]
console.log(foo)    // 1
console.log(rest)   // [3,4,5]

function foo (...parameters) {
    // parameters is an Array
    // with all parameters.
    console.log(parameters)
}
foo(1,2,3)      // [1,2,3]
foo([1,2,3],4)  // [[1,2,3],4]

// We can name some parameters
function foo (bar, ...parameters) {
    // bar is the first parameter.
    // parameters is an Array containing
    // the remaining parameters.
    console.log(bar, parameters)
}
foo() // undefined, []
foo(1) // 1, []
foo(1,2,3) // 1, [2,3]
```

### Array Literals
```js
[1, ...[2,3], 4] // [1,2,3,4]
```

#### Function Call
```js
function foo (a,b,c) {
    console.log(a,b,c)
}

foo(...[1,2,3]) // 1, 2, 3
```

### Further Reading
* [MDN - Spread Syntax](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)
* [PonyFoo - ES6 Spread and Butter in Depth](https://ponyfoo.com/articles/es6-spread-and-butter-in-depth)

## Classes

Javascript is a functional programming language.
However, the concept of `Classes` in ES6 is just syntax sugar on top of prototypal inheritance.
The goal is to make the language more obvious to programmers coming from other paradigms (e.g. OO).

### Examples
```js
class Counter {
  constructor () {
    this.count = 0
  }

  increment () {
    this.count++
  }

  decrement () {
    this.count--
  }

  static isNil (counter) {
      return counter.count === 0
  }
}

let counter = new Counter()
counter.increment()     // 1
counter.increment()     // 2
counter.decrement()     // 1
Counter.isNil(counter)  // false
```

#### Extends
```js
// We now can use the keyword "extends" to easily "inherit" from other "classes".
// Not forgetting that this is only syntax sugar to ES5 prototype terminology.

class Temperature extends Counter {
    constructor () {
        // The super keyword identifies our base class "Counter".
        super()
    }

    decrement () {
        if(this.count > 0) {
            super.decrement()
        }
    }
}

let termo = new Temperature()
termo.decrement()   // 0 // no decrement because "count" was already 0
termo.increment()   // 1
termo.decrement()   // 0
```

### Further Reading
* [MDN - Classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)
* [2ality - Classes in ECMAScript 6 (final semantics)](http://2ality.com/2015/02/es6-classes-final.html)
* [ExploringJS](http://exploringjs.com/es6/ch_classes.html)

## Iterators

Iteration is the new mechanism offer by ES6 to traversing data.

An `iterable` is a data structure responsable to enable data access to the public, and it does that by implementing a method whose key is `Symbol.iterator` (which is a factory for iterators.)

### Examples
```js
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
```

### Further Reading
* [MDN - Iteration Protocols](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols)
* [2ality - Iterables and iterators in ECMAScript 6](http://2ality.com/2015/02/es6-iteration.html)
* [ExploringJS - Iterables and iterators](http://exploringjs.com/es6/ch_iteration.html)
* [PonyFoo - ES6 Iterators in Depth](https://ponyfoo.com/articles/es6-iterators-in-depth)

## Generators

`Generators` are created by declaring a generator function, which returns a generator object (e.g. g) that can then be iterated using `Array.from(g)`, `[...g]`, or `for value of g`.

### Examples
```js
// We use the symbol * to mark a function as a generator and 'yield' to emit an element sequence.
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
typeof g.next === 'function'            // true
// The iterator for a generator is the generator itself.
g[Symbol.iterator]() === g              // true

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

// Whenever .next() is called on a generator, there's four events that can suspend the execution:
// * yield - emits the next value in the sequence
// * return - returns the last value in the sequence
// * throw - stops the execution in the generator entirely

// Use 'yield*' to delegate to other generator function.
function* generator () {
    yield* 'foo'
}

console.log([...generator()]) // ['f','o','o']
```

### Further Reading
* [MDN - Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
* [2ality - ES6 generators in depth](http://2ality.com/2015/03/es6-generators.html)
* [PonyFoo - ES6 Generators in Depth](https://ponyfoo.com/articles/es6-generators-in-depth)

## Symbols

`Symbols` are just a new primitive type in Javascript.

```js
typeof Symbol() // 'symbol'
```

### Examples
```js
// They are simple tokens that can be used as unique IDs.
// We can create a new symbol by using the function Symbol().
const ID = Symbol()

// Every symbol returned by Symbol() is unique.
Symbol() === Symbol() // false
```

#### Description
```js
// Symbol() has an optional string-value parameters,
// which represents the symbol description.
// This description is used to convert the symbol to a String.
const symbol = Symbol('aSymbol')

String(symbol) // 'Symbol(aSymbol)'
```

#### As Object Property
```js
const KEY = Symbol()
const obj = {
    [KEY]: 'Value'
}

console.log(obj[KEY]) // 'Value'
```

#### As Concept
```js
const CAR_BMW = Symbol('BMW')
const CAR_AUDI = Symbol('Audi')
const CAR_MERCEDES = Symbol('Mercedes')
```

#### .for() and .keyFor()
```js
// We can add symbols at run-time with Symbol.for(key) and Symbol.keyFor(symbol)

// We can lookup key in runtime-wide on symbol registry.
// If a symbol with that key exists then it would be returned.
// If no symbol exists, then on would be created.
// Therefore, Symbol.for(key) is idempotent.
Symbol.for('foo') === Symbol.for('foo') // true

// Symbol.keyFor(symbol) returns the key to which the symbol was associated with.
const BAR = Symbol.for('bar')
console.log(Symbol.keyFor(BAR)) // 'bar'
```

### Further Reading
* [MDN - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
* [ExploringJS - Symbols](http://exploringjs.com/es6/ch_symbols.html)
* [PonyFoo - ES6 Symbols in Depth](https://ponyfoo.com/articles/es6-symbols-in-depth)

## Promises

A `promise` is defined as "a proxy for a value that will eventually become available".
Although they can be use to both synchronous and asynchronous code flows, they are though for async flows.

### Examples

#### .then()
We can chain a Promise with the method `.then()`, which has two parameters:
* **onFulfilled** - Callback to be executed on promise success
* **onRejected** - Callback to be executed on promise fail

```js
fetch('foo').then(
    function onFulfilled (response) {
        // Handle success response.
        console.log(response)
    },
    function onRejected () {
        // Handle error.
        console.log('error')
    }
)
```

#### new Promise()
We can create promises from scratch by using `new Promise(resolver)`, where `resolver` parameter is the method used to resolve the promise.

The `resolver` parameter has two arguments:
* **resolve** - Callback to when the promise is fulfilled
* **rejected** - Callback to when the promise is rejected

```js
new Promise(resolve => resolve())           // promise is fulfilled
new Promise((resolve, reject) => reject())  // promise is rejected

// Resolving a promise with a value.
new Promise(resolve => resolve('foo'))
    .then(result => console.log(result))        // foo

// Resolving a promise with an exception.
new Promise((resolve, reject) => reject(new Error('Connection Timeout')))
    .then(null, reason => console.log(reason)) // Error: Connection Timeout
```

#### Promise.all
It allow us to wait for a set of promise to resolve.

```js
Promise.all([
    new Promise(resolve => resolve('foo')),
    new Promise(resolve => resolve('bar'))
]).then(response => console.log(response))  // ['foo', 'bar']

// If a single promise is rejected, the Promise.all is entirely rejected.
Promise.all([
    Promise.reject(),
    new Promise(resolve => resolve('foo'))
]).then(() => console.log('All Resolved'), () => console.log('All Rejected')) // 'All Rejected'
```

### Further Reading
* [MDN - Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [ExploringJS - Promises for asynchronous programming](http://exploringjs.com/es6/ch_promises.html)
* [PonyFoo - ES6 Promises in Depth](https://ponyfoo.com/articles/es6-promises-in-depth)

## Maps

A `Map` object is a new data structure is JavaScript with a simple key/value map. Any value (i.e. primite or objects) can be used as both key and value.

### Examples

#### new Map
```js
var map = new Map()

// We can use any object that follows the iterable protocol.
// e.g. ['key', 'value']
var map = new Map([
    ['foo', 'Mr.Foo'],
    ['bar', 'Mr.Bar']
])      
console.log(map)        // Map { 'foo' => 'Mr.Foo', 'bar' => 'Mr.Bar' }
// We can use the spread operator to have the opposite effect.
console.log([...map])   // [ [ 'foo', 'Mr.Foo' ], [ 'bar', 'Mr.Bar' ] ]
```

#### .set()
```js
var map = new Map()

// Use primitive as values.
map.set('foo', 'Mr.Foo') // Map { 'foo' => 'Mr.Foo' }
map.set(3, 'Mr.3')       // Map { 'foo' => 'Mr.Foo', 3 => 'Mr.3'  }
// Because `keys` are unique, when setting a key that is already defined,
// it will override the existing one.
map.set('foo', 'Mr.Bar') // Map { 'foo' => 'Mr.Bar', 3 => 'Mr.3'  }

// Use objects as values.
map.set(() => 'key', 'Value')   // Map { [Function] => 'Value' }
map.set({}, 'Value')            // Map { {} => 'Value' }
map.set(new Date, 'Value')      // Map { 2017-03-16T16:37:15.488Z => 'Value' }
map.set(Symbol, 'Value')        // Map { Symbol => 'Value' }
```

#### .has()
```js
var map = new Map([['foo', 'Mr.Foo']])

console.log(map.has('foo')) // true
console.log(map.has('bar')) // false
```

#### Deleting `key/value`
```js
var map = new Map([['foo', 'Mr.Foo'], ['bar', 'Mr.Bar']])

// Using .delete()
map.delete('bar')
console.log(map) // Map { 'foo' => 'Mr.Foo' }

// Using .clear(), which deletes everything
map.clear()
console.log(map) // Map { }
```

#### Iterating
```js
var map = new Map([['foo', 'Mr.Foo'], ['bar', 'Mr.Bar']])

// Use .entries() to iterate over the map.
console.log(map.entries())  // MapIterator { [ 'foo', 'Mr.Foo' ], [ 'bar', 'Mr.Bar' ] }

// Use .keys() to iterate over the map keys.
console.log(map.keys())     // MapIterator { 'foo', 'bar' }

// Use .values() to iterate over the map values.
console.log(map.values())   // MapIterator { 'Mr.Foo', 'Mr.Bar' }
```

### Further Reading
* [MDN - Map](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map)
* [ExploringJS - Map](http://exploringjs.com/es6/ch_maps-sets.html#sec_map)
* [PonyFoo - ES6 Maps in Depth](https://ponyfoo.com/articles/es6-maps-in-depth)

## Weak Maps

We can think of `WeakMaps` as a sub set of Maps.
WeakMaps are not iterable, i.e. there is no iterable protocol.

### Examples
```js
var map = new WeakMap()

// Every key must be an object.
map.set('foo', 'Mr.Foo') // TypeError: Invalid value used as weak map key

// This enables the map keys to be garage collected
//  when they're only being referenced as WeakMap keys.
// This is useful when we want to store data that will
//  eventually be lost, e.g. DOM nodes.

// We can pass an iterable to populate the WeakMap.
var foo = new Date()
var bar = () => {}
var map = new WeakMap([[foo, 'Mr.foo'], [bar, 'Mr.bar']]);

// .has()
console.log(map.has(foo)) // true

// .get()
console.log(map.get(bar)) // 'Mr.Bar'

// .delete()
map.delete(foo);
console.log(map.has(foo)) // false
```

### Further Reading
* [MDN - WealMaps](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
* [ExploringJS - WeakMap](http://exploringjs.com/es6/ch_maps-sets.html#sec_weakmap)
* [PonyFoo - ES6 WeakMaps, Sets, and WeakSets in Depth](https://ponyfoo.com/articles/es6-weakmaps-sets-and-weaksets-in-depth)

## Sets

`Sets` are another data structure introduced by ECMAScript 6. It works for arbitrary values.

### Examples
```js
var set = new Set()

set.add('foo')  // Set { 'foo' }
set.add('bar')  // Set { 'foo', 'bar' }

// .size
set.size // 2

// .keys()
var keysIterator = set.keys() // SetIterator { 'foo', 'bar' }
keysIterator.next().value     // 'foo'
keysIterator.next().value     // 'bar'

// .values()
var valuesIterator = set.values()
valuesIterator.next().value     // 'foo'
valuesIterator.next().value     // 'bar'

// .entries()
// Returns a new Iterator object containing an array of [value, value]
// for each element in the Set, in insertion order.
var entriesIterator = set.entries()
console.log(entriesIterator.next().value) // ['foo', 'foo']
console.log(entriesIterator.next().value) // ['bar', 'bar']

// .add()
set.add('zed')   // Set { 'foo', 'bar', 'zed' }

// .has()
set.has('zed')   // true

// .delete()
set.delete('zed') // Set { 'foo', 'bar' }
```

### Further Reading
* [MDN - Set](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set)
* [ExploringJS - Set](http://exploringjs.com/es6/ch_maps-sets.html#sec_set)
* [PonyFoo - ES6 WeakMaps, Sets, and WeakSets in Depth](https://ponyfoo.com/articles/es6-weakmaps-sets-and-weaksets-in-depth)

## Weak Sets

A `WeakSet` is set that it allows its elements being garbage-collected.

### Examples
```js
var set = new Set()

// .add()
set.add('foo')    // Set { 'foo' }

// .has()
set.has('foo')    // true

// .delete()
set.delete('foo') // Set { }
```

### Further Reading
* [MDN - WeakSets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
* [ExploringJS - WeakSets](http://exploringjs.com/es6/ch_maps-sets.html#sec_weakset)
* [PonyFoo - ES6 WeakMaps, Sets, and WeakSets in Depth](https://ponyfoo.com/articles/es6-weakmaps-sets-and-weaksets-in-depth)

## Proxies

`Proxies` allows us to intercept and customize behaviour on operations performed on objects (e.g. getting ot setting properties). They are a metaprogramming feature.

### Examples
```js
// Proxies allows us to defined behaviour whenever
// the properties of a target object are accessed.
var target = {}
// The handler object is used to configure traps for our Proxy.
var handler = {}
var proxy = new Proxy(target, handler)

// Proxy works as a simple pass-through to the target.
proxy.foo = 'Mr.Foo'

console.log(target.foo) // 'Mr.Foo'
console.log(target.bar) // undefined
```

#### Traps
Traps allow us to intercept interactions on target, as long as those interactions happen through the Proxy.
```js
// Let's define a Trap on the handler.get().
var handler = {
    // The handler.get() method is a trap for getting a property value.
    get: function (target, property, receiver) {
        // We run our Trap code, i.e. console.log.
        console.log(`Got property ${property}`)
        // Then return the value as .get() will usually do.
        return target[property]
    }
}
var target = { foo: 'Mr.Foo' }
var proxy = new Proxy(target, handler)

console.log(proxy.foo)
// 'Got property foo'
// 'Mr.Foo'
```

#### Revoke
Revocable proxies are the same as Proxies, with the difference that they can be revoke.

```js
var target = {}
var handler = {}
var { proxy, revoke } = Proxy.revocable(target, handler)

proxy.foo = 'Mr.Foo'
console.log(proxy) // { foo: 'Mr.Foo' }

// By revoking a Proxy we disable any operations on the Proxy.
// After revoking, any operations on the Proxy will throw an error.
revoke()

proxy.foo // TypeError: Cannot perform 'get' on a proxy that has been revoked
```

### Further Reading
* [MDN - Proxy](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
* [ExploringJS - Metaprogramming with proxies](http://exploringjs.com/es6/ch_proxies.html#sec_overview-proxies)
* [PonyFoo - ES6 Proxies in Depth](https://ponyfoo.com/articles/es6-proxies-in-depth)

## Number

`Number` is the same Javascript object that words as a wrapper of a numeric value. However, with ECMAScript 6 there's a couple of new things.

### Examples
```js
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

Number.EPSILON
// Which represents the smallest positive value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON

Number.MAX_SAFE_INTEGER
// Which represents the largest integer that
// can be safely and precisely represented in JavaScript.

Number.MIN_SAFE_INTEGER
// Which represents the smallest integer that
// can be safely and precisely represented in JavaScript.

Number.isSafeInteger
// Returns true for any integer between
// [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].
```

### Further Reading
* [MDN - Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
* [PonyFoo - ES6 Number Improvements in Depth](https://ponyfoo.com/articles/es6-number-improvements-in-depth)

## Object

There were a couple of changes in JavaScript `Objects`, mainly:
* **Object.assign** -  Copies the values of all enumerable properties from on or more source objects to the target and returns the target's object reference.
* **Object.is** - Determines if two objects are the same.
* **Object.getOwnPropertySymbols** - Returns an array with all the properties that are symbols.
* **Object.setPrototypeOf** - Sets the prototype of the specified object to another prototype.

### Example
```js
// .assign(target, ...sources)
Object.assign({}, { foo: 'Mr.Foo' }, { bar: 'Mr.Bar' }) // { foo: 'Mr.Foo', bar: 'Mr.Bar' }
Object.assign({ foo: 'Mr.Foo' }, { foo: 'Foo' })        // { foo: 'Foo' }

// .is(value1, value2)
Object.is([], [])  // false
Object.is({}, {})  // false
Object.is(0, -0)   // false

Object.is('foo', 'foo') // true
Object.is(null, null)   // true

// .getOwnPropertySymbols(obj)
var objectSymbols = Object.getOwnPropertySymbols({
    [Symbol('foo')]: 'Mr.Foo',
    [Symbol('bar')]: 'Mr.Bar'
}) // [ Symbol(foo), Symbol(bar) ]

console.log(objectSymbols.length) // 2
console.log(objectSymbols[0])     // Symbol(foo)

// .setPrototypeOf(obj, prototype)
var foo = {}
Object.setPrototypeOf(foo, null)
console.log(Object.getPrototypeOf(foo)) // null
```

### Further Reading
* [PonyFoo - ES6 Object Changes in Depth](https://ponyfoo.com/articles/es6-object-changes-in-depth)

## Strings

As for Object, `Strings` have had some updates.

### Examples

#### String Manipulation
```js
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
```

#### Unicode
```js
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
```

### Further Reading
* [ExploringJS - New string features](http://exploringjs.com/es6/ch_strings.html)
* [PonyFoo - ES6 Strings (and Unicode, ❤) in Depth](https://ponyfoo.com/articles/es6-strings-and-unicode-in-depth)

## Modules

`Modules` is the JavaScript standard module system strongly influenced by CommonJS. With ES6 modules we now have the terminology of `export` and `import` which we will explored in the examples bellow.

### Examples

#### Export
```js
// Default export
export default 'foo'
export default NaN
export default { foo: 'Mr.Foo' }
export default () => 'Mr.Foo'

// Naming export
export var foo = 'Mr.Foo'

var foo = 'Mr.Foo'
var bar = 'Mr.Bar'
export { foo, bar }

var foo = 'Mr.Foo'
export { foo as myFoo }

// Default export with naming
var api = {
    foo: 'Mr.Foo',
    bar: 'Mr.Bar'
}
export default api
```

#### Import
```js
// Default import
// export default 'foo'
import * from '_moduleName_'

// Naming import
// export var foo = 'Mr.Foo'
import { foo } from '_moduleName_'

// export { foo: 'Mr.Foo', bar: 'Mr.Bar' }
import { foo, bar } from '_moduleName_'

// export { foo as myFoo }
import { myFoo } from '_moduleName_'
```

### Further Reading
* [ExploringJS - Modules](http://exploringjs.com/es6/ch_modules.html)
* [PonyFoo - ES6 Modules in Depth](https://ponyfoo.com/articles/es6-modules-in-depth)
