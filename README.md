#  ECMAScript 2015 (ES6)
* [Destructuring Assignment](#destructuring-assignment)
* [Arrow Functions](#arrow-functions)
* [Blocks](#blocks-scope)
* [Let && Const](let-const.js)
* [Template Literals](template-literals.js)
* [Object Literals](object-literals.js)
* [Spread Operator](spread-operator.js)
* [Classes](classes.js)
* [Iterators](iterators.js)
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
