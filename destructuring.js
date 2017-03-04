// == Destructuring ==

// == On Variables ==

var pony = {
    foo: 'MrFoo',
    bar: 'MrBar'
}

// ES5 (as a comment)
// ES6 (uncommented)

// var foo = pony.foo
var { foo } =  pony; // foo = 'MrFoo'

// var bar = pony.foo
var { foo: bar } = pony; // bar = 'MrFoo'

// var foo = ({}).foo || 'default'
var { foo = 'default' } = {}; // foo = 'default'

// var foo = pony.foo
// var bar = pony.bar
var { foo, bar } = pony; // foo = 'MrFoo', bar = 'MrBar'

// var foo = undefined
var { foo } = {}; // foo = undefined

// var deep = foo.bar
var {foo: {bar: deep}} = {foo: {bar: 'bar'}} // deep = 'bar'

// error - ({}).foo.bar does not exits
// var {foo: {bar}} = {};

// var a = [6,3][0]
// var b = [6,3][1]
var [a,b] = [6,3]; // a = 6, b = 3

// var a = [6,9,3][0]
// var b = [6,9,3][0]
var [a, ,c] = [6,9,3]; // a = 6, c = 3

// var a = [b,a][0]
// var b = [b,a][1]
var [a,b] = [b,a]; // a = b; b = a

// == On Functions ==

// parameter with default value
var foo = function (bar = 2) {
    console.log(bar);
}

foo() // 2
foo(3) // 3

// parameter with default value object
var foo = function (bar = {a: 1, b: 2}) {
    console.log(bar);
}

foo() // {a: 1, b: 2}
foo({a: 3}) // {a: 3}

// parameter object with default values
var foo = function ({a = 1, b = 2}) {
    console.log(a);
    console.log(b);
}

// foo() // error - no default when object is not provided
foo({}) // 1, 2
foo({a: 3}) // 3, 2

// parameter object (with default values) and default value
var foo = function ({a = 1, b = 2} = {}) {
    console.log(a);
    console.log(b);
}

foo() // 1, 2
foo({}) // 1, 2
foo({a: 3}) // 3, 2
