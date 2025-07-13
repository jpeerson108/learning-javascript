// ===========================================
// Jaret's JS Cheat Sheet
// ===========================================

// 🔹 VARIABLES

let name = "Jaret" // Can be reassigned
const age = 30 // Cannot be reassigned

// 🔹 DATA TYPES

let str = "Hello" // String
let num = 42 // Number
let bool = true // Boolean
let arr = [1, 2, 3] // Array
let obj = { key: "val" } // Object
let nothing = null // Explicitly nothing
let notDefined // undefined (unassigned)

// 🔹 CONSOLE

console.log("Hello") // Print to console

// ===========================================
// 🔁 CONTROL FLOW
// ===========================================

// If / Else
if (age > 18) {
  console.log("Adult")
} else {
  console.log("Minor")
}

// Comparison Operators
// === equal & same type
// !== not equal
// >, <, >=, <=

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i) // Prints 0 to 4
}

// While loop
let i = 0
while (i < 5) {
  console.log(i)
  i++
}

// ===========================================
// 🔄 FUNCTIONS
// ===========================================

// Function
function greet(name) {
  return "Hello " + name
}

// Arrow function (shorter way)
const greet2 = (name) => "Hello " + name

console.log(greet("Jaret")) // "Hello Jaret"
console.log(greet2("Joe")) // "Hello Joe"

// ===========================================
// 📦 ARRAYS
// ===========================================

let fruits = ["apple", "banana", "cherry"]

// Access items
console.log(fruits[0]) // "apple"
console.log(fruits.length) // 3

// Modify
fruits.push("pear") // Add to end
fruits.pop() // Remove from end
fruits.shift() // Remove from start
fruits.unshift("kiwi") // Add to start

// Loop through array
fruits.forEach((fruit) => {
  console.log(fruit)
})

// Includes
console.log(fruits.includes("banana")) // true
console.log(fruits.indexOf("cherry")) // 2
// indexOf = tells you where a value is inside an array

// Join
console.log(fruits.join(", ")) // "apple, banana, cherry"
// join = combines data into a single string

// ===========================================
// 🔎 ADVANCED ARRAY METHODS
// ===========================================

let numbers = [1, 2, 3, 4, 5]

// map = transforms each item and returns a new array
let doubled = numbers.map((n) => n * 2) // [2, 4, 6, 8, 10]

// filter = keeps items that match a condition
let evens = numbers.filter((n) => n % 2 === 0) // [2, 4]

// find = returns the first match (or undefined)
let found = numbers.find((n) => n > 3) // 4

// reduce = combines all items into a single value
let total = numbers.reduce((sum, n) => sum + n, 0) // 15

// some = checks if at least one item matches
let hasEven = numbers.some((n) => n % 2 === 0) // true

// every = checks if all items match
let allPositive = numbers.every((n) => n > 0) // true

// ===========================================
// 🧱 OBJECTS
// ===========================================

let person = {
  name: "Jaret",
  age: 30,
  greet() {
    console.log("Hi!")
  },
}

// Access object properties
console.log(person.name) // "Jaret"
console.log(person["age"]) // 30
person.greet() // "Hi!"

// ===========================================
// 🎯 DOM (Document Object Model)
// ===========================================

// Selecting elements
document.getElementById("title") // By ID (no # needed)
document.getElementsByClassName("item") // All elements with class "item"
document.querySelector(".box") // First element with class "box"
document.querySelectorAll(".item") // All elements with class "item"

// Changing content
const title = document.querySelector(".title")
title.textContent = "Hello" // Set plain text
title.innerHTML = "<strong>Hi</strong>" // Set HTML content

// Changing styles
title.style.color = "red" // Inline style
title.classList.add("active") // Add class
title.classList.remove("active") // Remove class
title.classList.toggle("active") // Toggle class on/off

// Events
const button = document.querySelector("button")
button.addEventListener("click", () => {
  alert("Button clicked!")
})

// ===========================================
// 🔄 LOOPING OVER DOM ELEMENTS
// ===========================================

let items = document.querySelectorAll(".item")
items.forEach((item) => {
  item.style.color = "blue"
})

// ===========================================
// 🧪 MISC TOOLS
// ===========================================

// Template Literals
let user = "Jaret"
console.log(`Hello, ${user}`) // "Hello, Jaret"

// Ternary Operator
let status = age > 18 ? "Adult" : "Minor"
console.log(status)

// Nullish Coalescing (if null/undefined, use default)
let input = null
let output = input ?? "Guest"
console.log(output) // "Guest"
