/** Reflection **/

// Reflection is the ability for a program to examine, introspect,
// and modify its own structure and behavior at runtime. (by wikipedia)

// On ES6, reflection is taken into another level and provided through
// a Reflect object which contains methods for interceptable JS operations.
// i.e. ES6 Reflect is an ordinary object that provides methods as
// a reflection API.

// Unlike most global objects, Reflect is not a constructor
// (we cannot use the new operator or invoke it as a function).
// All properties and methods are static (just like Math object).

// Methods on Reflect.
var target = { foo: 'Mr.Foo' }

// .get(target, name, [receiver])
console.log(Reflect.get(target, 'foo')) // 'Mr.Foo'

// .set(target, name, value, [receiver])
Reflect.set(target, 'bar', 'Mr.Bar')
console.log(Reflect.get(target, 'bar')) // 'Mr.Bar'

// .has(target, name)
console.log(Reflect.has(target, 'zed')) // false

// .apply(target, receiver, args)
console.log(Reflect.apply(Math.floor, undefined, [2.75])) // 2

// .construct(target, args)
console.log(Reflect.construct(Array, [3])) // [ , , ]

// .getOwnPropertyDescriptor(target, name)
console.log(Reflect.getOwnPropertyDescriptor([], 'length')) // { value: 0, writable: true, enumerable: false, configurable: false }

// .defineProperty(target, name, desc)
Reflect.defineProperty(target, 'zed', {value: 'Mr.Zed', enumerable: true, configurable: true})
console.log(target) // { foo: 'Mr.Foo', bar: 'Mr.Bar', zed: 'Mr.Zed' }

// .getPrototypeOf(target)
Reflect.getPrototypeOf({}) // Object.prototype

// .setPrototypeOf(target, newProto)
Reflect.setPrototypeOf({}, Object.prototype) // true

// .deleteProperty(target, name)
Reflect.deleteProperty(target, 'zed')
console.log(target) // { foo: 'Mr.Foo', bar: 'Mr.Bar' }

// .isExtensible(target)
console.log(Reflect.isExtensible(target)) // true

// .preventExtensions(target)
Reflect.preventExtensions(target)
console.log(Reflect.isExtensible(target)) // false

// .ownKeys(target)
console.log(Reflect.ownKeys(target)) // [ 'foo', 'bar' ]

// Why Reflect?
// Altough the list looks like the methods define in Object, Reflect brings the
// big advantage of returning meaningfull data rather then throwing
// an error when it fails.

// Example.
// With Object.defineProperty we will understand that it worked or failed
// through try and catch.
try {
    Object.defineProperty(obj, name, desc)
} catch (e) {
    console.log('It failed!')
}

// As with Reflect.defineProperty we will understand that it worked or failed
// through the returned boolean.
if (Reflect.defineProperty(target, 'zed', { value: 'Mr.Zed' })) {

} else {
    console.log('It failed!')
    // Failed because prevented extensions on target.
}
