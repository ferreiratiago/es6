/** Maps **/

// Map is a new structure in ES6.
var map = new Map()

map.set('foo', 'Mr.Foo')
map.set('bar', 'Mr.Bar')

console.log(map) // Map { 'foo' => 'Mr.Foo', 'bar' => 'Mr.Bar' }

// We can use anything as a key.
// We are not limited to primitive (i.e. symbols, numbers, or strings).
// We can use functions.
map.set(() => 'key', 'Value') // Map { [Function] => 'Value' }
// We can use objects.
map.set({}, 'Value') // Map { {} => 'Value' }
// We can use dates.
map.set(new Date, 'Value') // Map { 2017-03-16T16:37:15.488Z => 'Value' }

// We can use any object that follows the iterable protocol.
// e.g. ['key', 'value']
var map = new Map([
    ['foo', 'Mr.Foo'],
    ['bar', 'Mr.Bar']
])

console.log(map) // Map { 'foo' => 'Mr.Foo', 'bar' => 'Mr.Bar' }

// We can use the spread operator to have the opposite effect.
console.log([...map]) // [ [ 'foo', 'Mr.Foo' ], [ 'bar', 'Mr.Bar' ] ]

// We can yse for...of along with destructuring to handle the map.
for (let [key, value] of map) {
    console.log(`${key}: ${value}`)
    // 'foo: Mr.Foo'
    // 'bar: Mr.Bar'
}

// Keys are unique.
// Therefore setting a key that is already defined,
// it will override the existing one.
var map = new Map()
map.set('foo', 'Mr.Foo')
console.log(map) // Map { 'foo' => 'Mr.Foo' }

map.set('foo', 'Mr.Bar')
console.log(map) // Map { 'foo' => 'Mr.Bar' }

// We can check if a key exists using .has().
var map = new Map([['foo', 'Mr.Foo']])

console.log(map.has('foo')) // true
console.log(map.has('bar')) // false

// We can use Symbol as soon as we keep the reference around.
var sym = Symbol()
var map = new Map([[sym, 'Mr.Sym']])

console.log(map.has(sym)) // true

// No casting is done.
var map = new Map([[1, 'Mr.One']])

console.log(map.has('1')) // false

// We can delete elements.
var map = new Map([['foo', 'Mr.Foo'], ['bar', 'Mr.Bar']])
// Using .delete()
map.delete('bar')
console.log(map) // Map { 'foo' => 'Mr.Foo' }
// Using .clear(), which deletes everything
map.clear()
console.log(map) // Map { }

// Iterate over a map.
var map = new Map([['foo', 'Mr.Foo'], ['bar', 'Mr.Bar']])
// Use .entries() to iterate over the map.
console.log(map.entries()) // MapIterator { [ 'foo', 'Mr.Foo' ], [ 'bar', 'Mr.Bar' ] }
// Use .keys() to iterate over the map keys.
console.log(map.keys()) // MapIterator { 'foo', 'bar' }
// Use .values() to iterate over the map values.
console.log(map.values()) // MapIterator { 'Mr.Foo', 'Mr.Bar' }

// We can count the number of entries with .size().
var map = new Map([['foo', 'Mr.Foo'], ['bar', 'Mr.Bar']])
console.log(map.size) // 2

// Btw,
// Map's entries are iterated in insertion order.
// As opposite to Object.keys, which follow an arbitary order.
