// If - True or False
{
  const userIsLoggedIn = true

  if (userIsLoggedIn) {
    console.log("User logged in")
  } else {
    console.log("Please login")
  }
}

// If - Calculation
{
  if (2 + 2 === 4) {
    console.log("Yes")
  } else {
    console.log("No")
  }
}

// If - Conditional &&
{
  const userIsLoggedIn = true
  const userIsOnDashboard = true

  if (userIsLoggedIn && userIsOnDashboard) {
    console.log("Yes")
  } else {
    console.log("No")
  }
}

// If - Check for Greater Than
{
  const totalPrice = 100

  if (totalPrice == null) {
    console.log("There is no total price")
  } else if (totalPrice < 10) {
    console.log("This is less than 10")
  } else if (totalPrice < 50) {
    console.log("This is less than 50")
  } else {
    console.log("This is expensive")
  }
}

// Create a variable that contains an array.
// Using an if statement witih else if, I want you to check the length of the array
// If it is empty, print out "empty"
// If it has less than 5 elements, print out "small"
// If it has less than 10 elements, print out "medium"
// Otherwise, print out "large"
{
  const numArray = [1, 2, 3, 4, 5, 6, 7, 8]

  if (numArray.length == null) {
    console.log("empty")
  } else if (numArray.length < 5) {
    console.log("small")
  } else if (numArray.length < 10) {
    console.log("medium")
  } else {
    console.log("large")
  }
}

// If Statement on one single line - Not use often
{
  const isUserLoggedIn = true
  if (isUserLoggedIn) console.log("User is logged in")
}

// Ternary Operator
{
  const isUserLoggedIn = true

  // Regular if statement
  if (isUserLoggedIn) {
    console.log("logged in")
  } else {
    console.log("not logged in")
  }

  // Same as above
  isUserLoggedIn ? console.log("logged in") : console.log("not logged in")
}

// Set a welcome message based on a true/false value
{
  const isUserLoggedIn = true

  //   let welcomeMessage = ""

  //   if (isUserLoggedIn) {
  //     welcomeMessage = "Welcome"
  //   } else {
  //     welcomeMessage = "Please log in"
  //   }

  const welcomeMessage = isUserLoggedIn ? "Welcome" : "Please log in"

  console.log(welcomeMessage)
}

// Switch Statements
{
  const favoriteAnimal = "cat"

  switch (favoriteAnimal) {
    case "bobcat":
    case "cat":
      console.log("cats are pretty cool")
      break
    case "dog":
      console.log("they are kinda loud")
      break
    case "shark":
      console.log("that is an interesting choice")
      break
    default:
      console.log("That is cool but idk")
  }
}

// Create a switch that checks to see the value of the number variable
// If the number is 0, print out "it is zero"
// If the number is 1 or 2, print out "it is small"
// If the number is 3 or 4, print out "it is medium"
// If the number is 5, print out "it is large"
// If the number is none of these, print out "try again"
{
  const number = 4

  switch (number) {
    case 0:
      console.log("it is zero")
      break
    case 1:
    case 2:
      console.log("it is small")
      break
    case 3:
    case 4:
      console.log("it is medium")
      break
    case 5:
      console.log("it is large")
      break
    default:
      console.log("try again")
  }
}

// For Loop
{
  for (let i = 0; i < 5; i++) {
    console.log("hi")
  }
}

// Create a for loop that loops from 0 to 10 and prints out all values from 0 to 10
// Modify this loop and exit the loop when the value is equal to 5 while using break
{
  for (let i = 0; i <= 10; i++) {
    if (i === 5) break
    console.log(i)
  }
}

// While Loop
{
  // for (let i = 0; i < 5; i++)
  //     console.log(i)

  let i = 0
  while (i < 5) {
    console.log(i)
    i++
  }
  // This gives the same result as the for loop above
}

// While Loop for Deep Nested Objects
{
  const person = {
    name: "Jaret",
    friend: {
      namee: "John",
      friend: {
        name: "Robert",
      },
    },
  }

  let currentPerson = person
  while (currentPerson.friend != null) {
    console.log(currentPerson.name)
    currentPerson = currentPerson.friend
  }
}

// Recursion
// Here, printNumber is calling itself and running repeatedly until the if statement becomes true. When the number + 1 reaches > 10, the loop exits from return.
// If there is no break, return, or stop criteria, a recursive function will likely enter into an infinite loop and stack overflow.

{
  function printNumber(number) {
    if (number > 10) return

    console.log(number)
    printNumber(number + 1)
  }

  printNumber(1)
}

console.log("breakpoint 1")

// Recursion
// Sum of the numbers between 1 and 10
{
  // for function
  let sum = 0
  for (let i = 1; i <= 10; i++) {
    sum = sum + i
  }
  console.log(sum)

  // recursive function - does same as above
  function sumNumbersBelow(number) {
    if (number <= 0) return 0
    return number + sumNumbersBelow(number - 1)
  }
  console.log(sumNumbersBelow(10))
}

// Recursion Practice #1 -----------------
{
  const person = {
    name: "Jaret",
    friend: {
      name: "Joe",
      friend: {
        name: "Robert",
      },
    },
  }

  let currentPerson = person
  while (currentPerson != null) {
    console.log(currentPerson.name)
    currentPerson = currentPerson.friend
  }
}
// Convert above to recursive function
console.log("breakpoint 2")
{
  const person = {
    name: "Jaret",
    friend: {
      name: "Joe",
      friend: {
        name: "Robert",
      },
    },
  }

  function printNames(currentPerson) {
    if (currentPerson == null) return
    console.log(currentPerson.name)
    printNames(currentPerson.friend)
  }

  printNames(person)

  // This code creates a nested object where each person has a name and a friend. It defines a function called printNames that prints the current person's name and then calls itself with that person's friend. This repeats until there are no more friends. When you run printNames(person), it prints "Jaret", then "Joe", then "Robert", and stops when it reaches the end of the chain.
}

// Recursion Practice #2 -----------------
{
  function countDown(n) {
    for (let i = n; i > 0; i--) {
      console.log(i)
    }
    console.log("Hooray")
  }
  // for loop Explanation
  //   Start i at the number passed into the function (n)
  //   Keep looping while i is greater than 0
  //   Subtract 1 from i each time (counting down)

  // Recursive Version

  function countDownRecursive(n) {
    if (n <= 0) {
      console.log("Hooray")
      return
    }
    console.log(n)
    countDownRecursive(n - 1)
  }
}

// Short Circuit Evaluation
{
  true || true
  // since the first condition is true, js ignores the remaining code since true or true passes on the first condition.

  function printName(name) {
    console.log(name || "Default")
  }

  printName()

  // Above will print "Default" because the printName() passes nothing, which is null (or false). The || or statement then chooses "Default" since it is technically true.

  const person = {
    address: {
      street: "Main St",
    },
  }

  console.log(person && person.address && person.address.street)
  // Will check T/F left to right
}
