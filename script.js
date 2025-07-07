// Add and Subtract

function add(a, b) {
  console.log("Result:", a + b)
}

function subtract(a, b) {
  console.log("Result:", a - b)
}

function calculate(num1, num2, operation) {
  operation(num1, num2)
}

calculate(10, 5, add) // Result: 15
calculate(10, 5, subtract) // Result: 5

calculate(4, 3, add)

// Shout vs Whisper

function shout(a) {
  return a.toUpperCase()
}

function whisper(b) {
  return b.toLowerCase()
}

function sayMessage(message, styleFunction) {
  console.log(styleFunction(message))
}

sayMessage("Hello there", shout) // logs: HELLO THERE
sayMessage("Hello there", whisper) // logs: hello there

// Double or Triple a Number

function double(a) {
  return a * 2
}

function triple(a) {
  return a * 3
}

function processNumber(number, calcFunc) {
  console.log(calcFunc(number))
}

processNumber(4, double) // logs: 8
processNumber(4, triple) // logs: 12

// English vs Spanish

function greetEnglish(a) {
  return "Hello " + a
}

function greetSpanish(a) {
  return "Hola " + a
}

function greetPerson(message, printFunc) {
  console.log(printFunc(message))
}

greetPerson("Jaret", greetEnglish) // logs: Hello, Jaret
greetPerson("Jaret", greetSpanish) // logs: Hola, Jaret

// Print my name with Hello

function printVariable(a) {
  console.log(a)
}

function printName1(name, printFunc) {
  printFunc("Hello " + name)
}

printName1("Jaret", printVariable)

// Print name with You're awesome, ___ !

function printMessage(message) {
  console.log(message)
}

function giveCompliment(name, callback) {
  callback("You're awesome, " + name + "!")
}

giveCompliment("Jaret", printMessage)

// Print my name with 'What's up ' but nest the function inside printName

function printName2(name, printFunc) {
  printFunc("What's up " + name + "?")
}

printName2("Jaret", function (variable) {
  console.log(variable)
})

// Arrow functions

function sum(a, b) {
  return a + b
}

let sumArrow = (a, b) => {
  return a + b
}

console.log(sumArrow(1, 2))

//

function printName(name) {
  console.log(name)
}

let printName3 = (name) => {
  console.log(name)
}

printName3("Jaret")

// Exercise

function printHi(name) {
  return "Hi" + name
}

let printHi2 = (name) => "Hi " + name

printHi2(console.log("Jaret2"))

{
  const a = ["a", "b", "c", "d", "e"]

  console.log(a[2])
}

{
  const a = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ]

  // Print out 4, 8, 12

  console.log(a[0][3], a[1][2], a[2][1])
}

// Create an object called car with the properties
// 1. Make
// 2. Model
// 3. isUsed
// Add a function called makeNoise which logs out Vroom

{
  const car = {
    Make: "Jeep",
    Model: "Patriot",
    isUsed: true,
    makeNoise() {
      console.log("Vroom")
    },
  }

  car.makeNoise()
}

let person = {
  name: "Jaret",
  hobbies: ["Weight Liftinig", "Programming"],
  address: {
    street: "12345 Main St",
    city: "Somewhere",
  },
}

console.log(person.address.street)
console.log(person.hobbies[0])

// Create an object called book with teh following properties
// 1. Title - string
// 2. Author - object with the properties name and age

const book = {
  title: "Awesome Book 3,000",
  author: {
    name: "John Smith",
    age: 75,
  },
}

book.title = "New Title"

console.log(book.author.name)
console.log(book.title)

// Redefining arrays

let hobbies = [1, 2]
hobbies[0] = 3

console.log(hobbies)

// Reference vs Values
{
  let a = 10
  let b = "Hi"
  let c = [1, 2] // 0x01
  let d = c // 0x01
  // d and c share the same location address
  d.push(3) // pushing 3 to the d array also adds to the c array

  console.log("a = " + a)
  console.log("b = " + b)
  console.log("c = " + c)
  console.log("d = " + d)
}

{
  let a = [1, 2] // 0x01
  let b = [1, 2] // 0x02

  console.log(a === b) // will return false
}

// Array Methods

{
  const a = [1, 2, 3, 4, 5]

  // forEach Method

  a.forEach((number, index) => {
    console.log(number + " " + index)
  })

  // Map Method

  let newA = a.map((number) => {
    return number * 2
  })

  console.log(newA)

  // Filter Method

  newA = a.filter((number) => {
    return number > 2
  })

  console.log(newA)

  // Find Method

  newA = a.find((number) => {
    return number > 2
  })

  console.log(newA)

  // Some Method

  newA = a.some((number) => {
    return number > 2
  })

  console.log(newA)

  // Every Method

  newA = a.every((number) => {
    return number > 2
  })

  console.log(newA)

  // Includes Method

  newA = a.includes(6)

  console.log(newA)

  // Reduce Method 1

  newA = a.reduce((sum, number) => {
    return sum + number
  }, 0)

  console.log(newA)
}

// Reduce Method 2

{
  const items = [
    { price: 10 },
    { price: 20 },
    { price: 14 },
    { price: 1 },
    { price: 6 },
  ]

  // Add all items together using reduce method.
  // Answer should be 51

  const total = items.reduce((sum, item) => {
    return sum + item.price
  }, 0)

  console.log(total)
}

// Template Literals - Uses backticks and curley brackets to create strings
{
  let a = "Hello"
  let b = "World"

  console.log(a + " " + b)
  console.log(`${a} ${b}`)
}

// Create two variables, one for your first name, and one for your last name and combine them together with backticks
{
  let a = "Jaret"
  let b = "Peerson"
  console.log(`${a} ${b}`)
}
