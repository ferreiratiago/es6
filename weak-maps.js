/** Weak Maps **/

// We can think of weak maps as a sub set of Maps.
// WeakMaps are not iterable, i.e. there is no iterable protocol.

// Every key must be an object.
var map = new WeakMap()
map.set('foo', 'Mr.Foo') // TypeError: Invalid value used as weak map key

// This enable the map keys to be garage collected
// when they're only being referenced as WeakMap keys.
// This is usefull when we want to store data that will
// eventually be lost, e.g. DOM nodes.

// We can pass an iterable to populate the WeakMap.
var foo = new Date()
var bar = () => {}
var map = new WeakMap([[foo, 'Mr.foo'], [bar, 'Mr.bar']]);

// .has()
console.log(map.has(foo)) // true

// .get()
console.log(map.get(bar)) // 'Mr.Bar'

// .delete()
map.delete(foo);
console.log(map.has(foo)) // false

// Why should we use it?
// The answer is garbage collection.
// Because the keys are weakly store, this means that if
// there are no other references to one of its keys,
// then the object is subject to garbage collection.
