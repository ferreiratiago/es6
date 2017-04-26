/** Template Literals **/

"ES5 String"
`ES6 Template String`

// String wrapped into ""
`Double "quote"` // Double "quote"

// String wrapped into ''
`Single 'quote'` // Single 'quote'

// Multiple line
`Multiple
Line`

// Interpolation
`${1 + 2}` // 3

const foo = 'MrFoo'
`Hello ${foo}` // Hello MrFoo

const bar = () => 'MrBar'
`Hello ${bar()}` // Hello MrBar

// Our own template
const mr = (template, ...expressions) => {
    // template is an Array broke at the interpolations
    // e.g. for `foo {$a} bar {$b}`
    // template = ['Dear ', ' and ', '']
    return template.reduce((result, current, index) => {
        return `${result}Mr.${expressions[index - 1]}${current}`
    })
}

const foo = 'Foo'
const bar = 'Bar'

mr`Dear ${foo} and ${bar}` // Dear Mr.Foo and Mr.Bar
