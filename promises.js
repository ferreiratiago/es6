/** Promises **/

// What is a Promise?
// Is defined as "a proxy for a value that will eventually become available".
// Although they can be use to both synchronous and asynchronous code flows,
// they are though for async flows.

var fetch = require('node-fetch')

// We can chain a Promise with the method .then(), which has two parameters:
fetch('foo').then(
    // callback to be executed on promise success
    () => {},
    // callback to be executed on promise fail
    () => {})

// Example
fetch('foo').then(function onFulfilled (response) {
    // Handle success response.
    console.log(response)
}, function onRejeted () {
    // Handle error.
    console.log('error')
})

// Creating a Promise from scratch.
// We can create promises from scratch by using 'new Promise(resolver)',
// where 'resolver' parameter is the method used to resolve the promise.

// The 'resolver' parameter has two arguments:
// * resolve - callback to when the promise is fulfilled
// * rejected - callback to when the promise is rejected

new Promise(resolve => resolve())   // promise is fulfilled
// new Promise((resolve, reject) => reject())  // promise is rejected

// Resolving a promise with a value.
new Promise(resolve => resolve('foo'))
    .then(result => console.log(result)) // foo

// Resolving a promise with an exception.
new Promise((resolve, reject) => reject(new Error('Connection Timeout')))
    .then(null, reason => console.log(reason)) // Error: Connection Timeout

// Promise.all
// It allow us to wait for a set of promise to resolve.
Promise.all([
    new Promise(resolve => resolve('foo')),
    new Promise(resolve => resolve('bar'))
]).then(response => console.log(response)) // ['foo', 'bar']

// If a single promise is rejected, the Promise.all is entirely rejected.
Promise.all([
    Promise.reject(),
    new Promise(resolve => resolve('foo'))
]).then(() => console.log('All Resolved'), () => console.log('All Rejected')) // 'All Rejected'

// Btw,
// This is a great place for promise visualization:
// http://bevacqua.github.io/promisees/
