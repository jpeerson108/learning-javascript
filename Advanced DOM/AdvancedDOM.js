// Fetch - Query info that is on the web
// API - Website formatted in a way that will return data

const URL = "https://jsonplaceholder.typicode.com/users"

// Promise Version
fetch(URL)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    // Log the name of each of the users
    console.log(data.map((user) => user.name))
  })

// Explained
// fetch gets data from the given URL
// The first .then((response) => response.json()):
//// response is the raw response
//// .json() parses the body into usable JSON data
// The second .then((data) => { ... }):
//// data is now an array of users
//// .map((user) => user.name) loops through the users and creates a new array of just the name values
//// user is just the name for each user in the loop
// console.log(...) prints the new array of names

// Convert Promise Version to Async

// Fetch Data from Server - Example
async function doStuff() {
  try {
    const response = await fetch(URL)
    console.log(response.ok)
    const data = await response.json()
    console.log(data.map((user) => user.name))
  } catch (error) {
    console.error("Fetch failed: ", error)
  }
}

// Send Data to Server - Example

const URLPost = "https://jsonplaceholder.typicode.com/posts"

async function doStuff2() {
  const response = await fetch(URLPost, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Post",
    }),
  })
  const post = await response.json()
  console.log(post)
}

doStuff()
doStuff2()

// Practice: Get all of the comments with the ID=1
// Fetch all of the comments, print them out

const URLgetID1 = "https://jsonplaceholder.typicode.com/comments?postId=1"

async function getID1() {
  const response = await fetch(URLgetID1)
  const comments = await response.json()
  comments.forEach((comment) => {
    console.log(comment.body)
  })
}

getID1()

// Event Loops
function test() {
  console.log("hi 1") // synchronous
  console.log("hi 2") // synchronous
  new Promise((resolve, reject) => resolve("hi promise")).then((message) =>
    console.log(message)
  )
  setTimeout(() => console.log("hi 3"), 10) // asynchronous (delayed)
  setTimeout(() => console.log("hi 4"), 0) // asynchronous (delayed)
  console.log("hi 5") // synchronous
}

test()
console.log("hi 6") // synchronous

// Async functions get queued to run at the end of the full event loop, unlike promises which run as soon as the function they are in comopletes
