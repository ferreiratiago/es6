/** Arrow Functions **/

const increment = (value) => {
    return value + 1
}

increment(3) // 4

// Without explicit block scope.
const increment = (value) => value + 1

increment(3) // 4

const increment = value => value + 1

increment(3) // 4

// Object returning
// The return statement needs to be wrapped on '()'.
const foo = () => ({
    value: 3
})

foo() // { value : 3 }

// "this" is bound to scope.
this.bar = 3

// ES5
function foo() {
    return bar
}

foo() // Error - bar undefined

// ES6
const foo = () => this.bar

foo() // 3
