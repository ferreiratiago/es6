/** Modules **/

// Strict Mode
// With ES6 module system, the Strict mode is turned on by default.
// We can follow the MDN documentation for more detail info on Strict Mode:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

/** Export **/

// NOTE: In order to be able to playaround I will use node syntax
// and add as a comment the equivalent in ES6.

/** Default Export **/
module.exports = 'foo'
// export default 'foo'
module.exports = NaN
// export default NaN
module.exports = { foo: 'Mr.Foo' }
// export default { foo: 'Mr.Foo' }
module.exports = () => 'Mr.Foo'
// export default () => 'Mr.Foo'


/** Naming Export **/
// Export one per file.
module.exports.foo = 'Mr.Foo'
// export var foo = 'Mr.Foo'

// Export several per file.
var foo = 'Mr.Foo'
var bar = 'Mr.Bar'
module.exports = {
    foo: foo,
    bar: bar
}
// export { foo, bar }

// Define export name.
var foo = 'Mr.Foo'
module.exports = { newFoo: foo }
// export { foo as myFoo }

/** Default Export with Naming **/
var api = {
    foo: 'Mr.Foo',
    bar: 'Mr.Bar'
}
module.exports = api
// export default api

/** Import **/

// All the above only makes sense along with import statement.
// Opposite to the export statement, which allow us to export values,
// the import statement allow us to use load and use those values in other modules.

/** Default Import **/
// export default 'foo'
// import * from '_moduleName_'

/** Naming Import **/
// One value.
// export var foo = 'Mr.Foo'
// import { foo } from '_moduleName_'

// Several values.
// export { foo: 'Mr.Foo', bar: 'Mr.Bar' }
// import { foo, bar } from '_moduleName_'

// With specific export name.
// export { foo as myFoo }
// import { myFoo } from '_moduleName_'
