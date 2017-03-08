/** Classes **/

// Javascript is a functional programming language.
// However, the concept of Classes in ES6 is just syntax suger on top of prototypal inheritance.
// The goal is to make the language more obvious to programmers comming from other paradigms (e.g. OO).

// ES5
function Counter () {
    this.count = 0
}

Counter.prototype.increment = function (value) {
    this.count++
}

Counter.prototype.decrement = function () {
    this.count--
}

// Static method.
// A static method belongs to the class rather than the object of a class.
// We can invoke a static method with no need to create an instance.
Counter.isNil = function (counter) {
    return counter.count === 0
}

let counter = new Counter()
counter.increment()     // 1
counter.increment()     // 2
counter.decrement()     // 1
Counter.isNil(counter)  // false

// ES6
class Counter {
  constructor () {
    this.count = 0
  }

  increment () {
    this.count++
  }

  decrement () {
    this.count--
  }

  static isNil (counter) {
      return counter.count === 0
  }
}

let counter = new Counter()
counter.increment()     // 1
counter.increment()     // 2
counter.decrement()     // 1
Counter.isNil(counter)  // false

// We now can use the keyword "extends" to easily "inherit" from other "classes".
// Not forgettting that this is only syntax sugar to ES5 prototype terminnology.

class Temperature extends Counter {
    constructor () {
        // The super keyword identifies our base class "Counter".
        super()
    }

    decrement () {
        if(this.count > 0) {
            super.decrement()
        }
    }
}

let termo = new Temperature()
termo.decrement()   // 0 // no decrement because "count" was already 0
termo.increment()   // 1
termo.decrement()   // 0
