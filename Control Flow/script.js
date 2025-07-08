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
