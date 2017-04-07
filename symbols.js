/** Symbols **/

// Symbols are just a new primitive type in Javascript.
typeof Symbol() // 'symbol'

// They are simple tokens that can be used as unique IDs.
// We can create a new symbol by using the function Symbol().
const ID = Symbol()

// Every symbol returned by Symbol() is unique.
Symbol() === Symbol() // false

// Symbol() has an optional string-value parameters,
// which represents the symbol description.
// This description is used to convert the symbol to a String.
const symbol = Symbol('aSymbol')

String(symbol) // 'Symbol(aSymbol)'

// They can be used as a object properties.
const KEY = Symbol()
const obj = {
    [KEY]: 'Value'
}

console.log(obj[KEY]) // 'Value'

// Also to represent concepts.
const CAR_BMW = Symbol('BMW')
const CAR_AUDI = Symbol('Audi')
const CAR_MERCEDES = Symbol('Mercedes')

// We can add symbols at run-time with Symbol.for(key) and Symbol.keyFor(symbol)

// We can lookup key in runtime-wide on symbol registry.
// If a symbol with that key exists then it would be returned.
// If no symbol exists, then on would be created.
// Therefore, Symbol.for(key) is idempotent.
Symbol.for('foo') === Symbol.for('foo') // true

// Symbol.keyFor(symbol) returns the key to which the symbol was associated with.
const BAR = Symbol.for('bar')
console.log(Symbol.keyFor(BAR)) // 'bar'

// Why Symbols?
// They are unique and prevent name clashes.
