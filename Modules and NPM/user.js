export const me = {
  name: "Jaret",
  age: 31,
}

export const sally = {
  name: "Sally",
  age: 22,
}

export default function printUser(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}`)
}

// Node.js Export
module.exports = {
  me: me,
  sally: sally,
  printUser: printUser,
}

console.log("Test")
