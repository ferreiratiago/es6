/** Blocks **/

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
