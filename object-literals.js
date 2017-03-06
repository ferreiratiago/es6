/** Object Literals **/

// Property value shorthand
const foo = 'Mr.Foo'

{
    // Because the property 'foo' has the
    // same name as the const 'foo'
    // no need to write { foo: foo }
    foo // foo : foo
}

// Computed properties
{
    // [ value to compute to property ] : value
    [ 1 + 3 ] : 'Number 4' // '4' : 'Number 4'
}

// Method definition
{ bar () { } } // { bar: function () {} }
