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
