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
* [Generators](generators.js)
* [Symbols](symbols.js)
* [Promises](promises.js)
* [Maps](maps.js)
* [Weak Maps](weak-maps.js)
* [Sets](sets.js)
* [Weak Sets](weak-sets.js)
* [Proxies](proxies.js)
* [Number](number.js)
* [Array](array.js)
* [Object](object.js)
* [Strings](strings.js)
* [Modules](modules.js)

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
* [MDN Destructuring Assignment](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
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
* [MDN Arrow Functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
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
* [MDN Const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) and [MDN let](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let)
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
