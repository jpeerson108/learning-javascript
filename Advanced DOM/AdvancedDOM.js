// Fetch - Query info that is on the web
// API - Website formatted in a way that will return data

fetch("https://jsonplaceholder.typicode.com/users")
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
