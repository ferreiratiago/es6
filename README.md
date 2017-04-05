#  ECMAScript 2015 (ES6)
* [Destructuring Assignment](#destructuring-assignment)
* [Arrow Functions](arrow-functions.js)
* [Blocks](blocks.js)
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

Destructuring assignment allow us to assign properties of arrays or objects to variables.

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
