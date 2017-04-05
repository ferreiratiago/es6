/** Let && Const **/

// ES5
var foo = 'Mr.Foo'

// var variables are function-scoped,
// mainly their innermost enclosing function.

function func (flag) {

    if (flag) {
        var foo = 'NewFoo'

        return foo
    }

    return foo
}

func(true) // NewFoo
func(false) // undefined

// ES6
// Use let
let foo = 'Mr.Foo'

// let variables are block-scoping
// i.e. they live in their defined block.

function func (flag) {

    if(flag) {
        // new block scope
        let foo = 'NewFoo'

        return foo
        // end block scope
    }

    return foo
}

func(true) // NewFoo
func(false) // Mr.Foo

// Use const
const foo = 'Mr.Foo'

// const are the try for constant values,
// i.e. immutable values
// however, only the assignment is immutable.

foo = 'NewFoo' // ERROR - No new assignment allowed.

// An interesting example
const bar = { a : 3 }

bar = { b : 7} // ERROR - No new assignment allowed.
bar.a = 7 // OK - We are updating a property, not the assignment.
