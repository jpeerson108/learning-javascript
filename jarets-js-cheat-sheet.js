// ===========================================
// Jaret's JS Cheat Sheet
// ===========================================

// 🔹 VARIABLES

let name = "Jaret" // You can change this later
const age = 30 // You CANNOT reassign this

// 🔹 DATA TYPES

let str = "Hello" // String
let num = 42 // Number
let bool = true // Boolean
let arr = [1, 2, 3] // Array
let obj = { key: "val" } // Object
let nothing = null // Null (explicitly nothing)
let notDefined // undefined (not assigned)

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
// === equal + same type
// !== not equal
// >, <, >=, <= are standard math comparisons

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

// Function declaration
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

// Other useful methods
console.log(fruits.includes("banana")) // true
console.log(fruits.indexOf("cherry")) // 2
console.log(fruits.join(", ")) // "apple, banana, cherry"

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
