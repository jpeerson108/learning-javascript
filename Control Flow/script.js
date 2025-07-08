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
