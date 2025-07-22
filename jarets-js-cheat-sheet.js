// ===========================================
// 🧠 JARET'S JAVASCRIPT CHEAT SHEET
// ===========================================

// ===========================================
// 🏷️ VARIABLES & DATA TYPES
// ===========================================

let name = "Jaret" // Reassignable variable
const age = 30 // Constant (can't reassign)

let str = "Hello" // String
let num = 42 // Number
let bool = true // Boolean
let arr = [1, 2, 3] // Array
let obj = { key: "val" } // Object
let nothing = null // Explicitly "nothing"
let notDefined // undefined (not assigned)

// ===========================================
// 🖨️ CONSOLE & LOGGING
// ===========================================

console.log("Hello") // Prints to the console

// ===========================================
// 🔁 CONTROL FLOW & OPERATORS
// ===========================================

if (age > 18) {
  console.log("Adult") // If condition is true
} else {
  console.log("Minor") // Else case
}

// Comparison operators: ===, !==, >, <, >=, <=

// Ternary operator
let status = age > 18 ? "Adult" : "Minor" // One-line if/else

// Nullish coalescing
let input = null
let output = input ?? "Guest" // "Guest" (fallback if null or undefined)

// ===========================================
// 🔄 FUNCTIONS
// ===========================================

function greet(name) {
  return "Hello " + name // Traditional function
}

const greet2 = (name) => "Hello " + name // Arrow function

console.log(greet("Jaret")) // "Hello Jaret"
console.log(greet2("Joe")) // "Hello Joe"

// ===========================================
// 📚 ARRAYS
// ===========================================

let fruits = ["apple", "banana", "cherry"]

fruits[0] // "apple"
fruits.length // 3
fruits.push("pear") // Add to end
fruits.pop() // Remove from end
fruits.shift() // Remove from start
fruits.unshift("kiwi") // Add to start

fruits.includes("banana") // true
fruits.indexOf("cherry") // 2
fruits.join(", ") // "apple, banana, cherry"

fruits.forEach((fruit) => {
  console.log(fruit) // Loop and log each fruit
})

// ===========================================
// 📊 ADVANCED ARRAY METHODS
// ===========================================

let numbers = [1, 2, 3, 4, 5]

numbers.map((n) => n * 2) // [2, 4, 6, 8, 10]
numbers.filter((n) => n % 2 === 0) // [2, 4]
numbers.find((n) => n > 3) // 4
numbers.reduce((sum, n) => sum + n, 0) // 15
numbers.some((n) => n % 2 === 0) // true
numbers.every((n) => n > 0) // true

// ===========================================
// 🧱 OBJECTS & DOT NOTATION
// ===========================================

let person = {
  name: "Jaret",
  age: 30,
  greet() {
    console.log("Hi!") // Method on object
  },
}

person.name // "Jaret"
person["age"] // 30
person.greet() // "Hi!"

// Dot notation examples
obj.name // Access property
obj.greet() // Call method
user.address.city // Nested property
Math.round(4.7) // 5
"hi".toUpperCase() // "HI"

// ===========================================
// 🎯 DOM BASICS
// ===========================================

// SELECTING ELEMENTS
document.getElementById("title") // By ID
document.getElementsByClassName("item") // All with class
document.querySelector(".box") // First match
document.querySelectorAll(".item") // All matches

// CHANGING CONTENT
const title = document.querySelector(".title")
title.textContent = "Hello" // Set plain text
title.innerHTML = "<strong>Hi</strong>" // Set HTML content

// CHANGING STYLES
title.style.color = "red" // Set inline style
title.classList.add("active") // Add class
title.classList.remove("active") // Remove class
title.classList.toggle("active") // Toggle class

// EVENTS
const button = document.querySelector("button")
button.addEventListener("click", (e) => {
  e.preventDefault() // Stop default action
  alert("Button clicked!") // Show alert
})

// LOOPING OVER DOM ELEMENTS
let items = document.querySelectorAll(".item")
items.forEach((item) => (item.style.color = "blue")) // Color all

// ===========================================
// 🧾 FORM INPUTS & .value
// ===========================================

const inputEl = document.getElementById("username")
inputEl.value // Get current text
inputEl.value.trim() // Remove spaces before/after

const select = document.getElementById("priority")
select.value // Get selected value

// Not valid on non-form elements like <div>, <p>, etc.
const heading = document.getElementById("title")
// heading.value ❌ — use textContent or innerHTML instead

// ===========================================
// 🧭 DOM TRAVERSAL, CREATION & DATA ATTRIBUTES
// ===========================================

const btn2 = document.querySelector("button")
btn2.dataset.id // Access data-id → "123"

const item = document.querySelector(".item")
item.parentElement // Get parent element
item.children // Get child elements

const newDiv = document.createElement("div") // Create new div
newDiv.textContent = "Hi there" // Add content
document.body.appendChild(newDiv) // Add to page (or list)

// ===========================================
// 🔂 LOOPS
// ===========================================

for (let i = 0; i < 5; i++) {
  console.log(i) // 0 to 4
}

let i = 0
while (i < 5) {
  console.log(i) // 0 to 4
  i++
}

// ===========================================
// 🧰 MISC TOOLS
// ===========================================

let user = "Jaret"
console.log(`Hello, ${user}`) // Template literal

console.log("5" == 5) // true (loose)
console.log("5" === 5) // false (strict)

console.log(NaN === NaN) // false
console.log(Number("hello")) // NaN
console.log(isNaN("hello")) // true

// ===========================================
// 🔁 RECURSION
// ===========================================

function countDown(n) {
  if (n <= 0) return // Base case
  console.log(n)
  countDown(n - 1) // Recursive call
}

countDown(3) // 3, 2, 1

// ===========================================
// 🔒 CLOSURES
// ===========================================

function outer() {
  let count = 0
  return function inner() {
    count++ // Remembers `count`
    console.log(count)
  }
}

const counter = outer()
counter() // 1
counter() // 2

// ===========================================
// 📎 VALUE VS REFERENCE
// ===========================================

// PRIMITIVE TYPES
let a = 5
let b = a
b++
console.log(a) // 5 (unchanged)

// REFERENCE TYPES
let obj1 = { value: 10 }
let obj2 = obj1
obj2.value++
console.log(obj1.value) // 11 (both changed)

// ===========================================
// 🆕 NEW & THIS
// ===========================================

function Person(name) {
  this.name = name // Set name on new object
}

const user2 = new Person("Jaret")
console.log(user2.name) // "Jaret"

// ===========================================
// ⏳ PROMISES
// ===========================================

// ✅ Basic Structure (with real condition)
const promise = new Promise((resolve, reject) => {
  const userIsLoggedIn = true // Example condition

  if (userIsLoggedIn) {
    resolve("User is logged in!") // Marks promise as fulfilled
  } else {
    reject("User not logged in.") // Marks promise as rejected
  }
})

// ✅ Handle result
promise
  .then((result) => console.log(result)) // If success
  .catch((error) => console.error(error)) // If error
  .finally(() => console.log("Done")) // Always runs

// ✅ Use Case: Delay with setTimeout
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

wait(500).then(() => console.log("Waited 0.5s"))

// ===========================================
// 🔗 COMMON PROMISE METHODS
// ===========================================

// .then()       → Runs when resolved
// .catch()      → Runs when rejected
// .finally()    → Runs after either (good for cleanup)

// Promise.all([])
// → Waits for all to succeed, or fails if any fail
// Example:
Promise.all([Promise.resolve("A"), Promise.resolve("B")]).then((results) =>
  console.log(results)
) // ["A", "B"]

// Promise.any([])
// → Resolves with the first one that succeeds (ignores failures)

// Promise.race([])
// → Resolves or rejects with the first to finish (win the "race")

// Promise.allSettled([])
// → Waits for all, regardless of success or failure
//   Returns an array of result objects (status + value/reason)

// ✅ Fun Example: Flip a Coin
const flipCoin = new Promise((resolve, reject) => {
  Math.random() > 0.5 ? resolve("Heads") : reject("Tails")
})

flipCoin
  .then((result) => console.log("You got:", result))
  .catch((error) => console.log("Try again:", error))
