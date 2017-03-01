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
// however, only the assignmnet is immutable.

foo = 'NewFoo' // error - no new assignmnet allowed

// An interesting example
const bar = { a : 3 }

bar = { b : 7} // error - no new assignmnet allowed
bar.a = 7 // ok - we are updating a property, not the assignmnet
