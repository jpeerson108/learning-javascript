// prettier-ignore

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
  console.log("Adult") // If true
} else {
  console.log("Minor") // Else
}

// Comparison: === (equal & same type), !== (not equal), >, <, >=, <=

// Ternary Operator
let status = age > 18 ? "Adult" : "Minor" // One-line if/else

// Nullish Coalescing
let input = null
let output = input ?? "Guest" // "Guest" (if input is null/undefined)

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

numbers.map((n) => n * 2) // [2, 4, 6, 8, 10] (transform)
numbers.filter((n) => n % 2 === 0) // [2, 4] (keep even numbers)
numbers.find((n) => n > 3) // 4 (first match)
numbers.reduce((sum, n) => sum + n, 0) // 15 (sum all values)
numbers.some((n) => n % 2 === 0) // true (any match)
numbers.every((n) => n > 0) // true (all match)

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

// Dot Notation examples
obj.name // Access property
obj.greet() // Call method
user.address.city // Nested property
Math.round(4.7) // 5
"hi".toUpperCase() // "HI"

// ===========================================
// 🎯 DOM BASICS
// ===========================================

// SELECTORS
document.getElementById("title") // By ID
document.getElementsByClassName("item") // By class (HTMLCollection)
document.querySelector(".box") // First match
document.querySelectorAll(".item") // All matches (NodeList)

// CONTENT
const title = document.querySelector(".title")
title.textContent = "Hello" // Set plain text
title.innerHTML = "<strong>Hi</strong>" // Set HTML

// STYLING
title.style.color = "red" // Inline style
title.classList.add("active") // Add class
title.classList.remove("active") // Remove class
title.classList.toggle("active") // Toggle class

// EVENTS
const button = document.querySelector("button")
button.addEventListener("click", (e) => {
  e.preventDefault() // Prevent default behavior
  alert("Button clicked!") // Show alert
})

// LOOPING OVER ELEMENTS
let items = document.querySelectorAll(".item")
items.forEach((item) => (item.style.color = "blue")) // Color all blue

// ===========================================
// 🧾 FORM INPUTS & .value
// ===========================================

const inputEl = document.getElementById("username")
inputEl.value // Get current input text
inputEl.value.trim() // Trim spaces

const select = document.getElementById("priority")
select.value // Get selected option

// ❌ Not valid on <div>, <p>, etc.
const heading = document.getElementById("title")
// heading.value ❌ — use textContent instead

// .textContent vs .innerHTML
heading.textContent = "Welcome!" // Sets plain text
heading.innerHTML = "<strong>Hello</strong>" // Sets bold HTML

// ===========================================
// 🧭 DOM TRAVERSAL & DATA ATTRIBUTES
// ===========================================

const btn2 = document.querySelector("button")
btn2.dataset.id // Access data-id → "123"

const item = document.querySelector(".item")
item.parentElement // Get parent
item.children // Get children

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

console.log("5" == 5) // true (loose comparison)
console.log("5" === 5) // false (strict)

// NaN
console.log(NaN === NaN) // false (NaN is never equal to itself)
console.log(Number("hello")) // NaN (invalid conversion)
console.log(isNaN("hello")) // true

// ===========================================
// 🔁 RECURSION
// ===========================================

function countDown(n) {
  if (n <= 0) return // Base case
  console.log(n) // Log current number
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

// PRIMITIVES
let a = 5
let b = a
b++
console.log(a) // 5 (unchanged)

// OBJECTS
let obj1 = { value: 10 }
let obj2 = obj1
obj2.value++
console.log(obj1.value) // 11 (both changed)

// ===========================================
// 🆕 NEW & THIS
// ===========================================

function Person(name) {
  this.name = name // Set property
}

const user2 = new Person("Jaret")
console.log(user2.name) // "Jaret"
