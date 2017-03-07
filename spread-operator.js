/** Spread Operator **/

// Function Definition

// ES5
function foo () {
    // arguments is an Array-like object variable
    // available within all functions that contains
    // the parameters passed to the function.
    console.log(arguments)
}

foo(1,2,3) // { '0': 1, '1': 2, '2': 3 }
foo([1,2,3],4) // { '0': [1,2,3], '1': 4 }

// ES6
function foo (...parameters) {
    // parameters is an Array
    // with all parameters.
    console.log(parameters)
}

foo(1,2,3) // [1,2,3]
foo([1,2,3],4) // [[1,2,3],4]

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

// Function Invocation
function foo (a,b,c) {
    console.log(a,b,c)
}

// ES5
foo.apply(this, [1,2,3]) // 1, 2, 3

// ES6
foo(...[1,2,3]) // 1, 2, 3

// Concatenation
// ES5
[1].concat([2,3],4) // [1,2,3,4]

// ES6
[1, ...[2,3], 4] // [1,2,3,4]

// Destructuring
// ES5
var foo  = [1,2,3,4,5][0] // 1
var rest = [1,2,3,4,5].slice(2,5) // [3,4,5]

// ES6
[foo, , ...rest] = [1,2,3,4,5]

console.log(foo) // 1
console.log(rest) // [3,4,5]
