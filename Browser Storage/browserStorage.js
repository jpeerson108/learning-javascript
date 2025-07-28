localStorage.setItem("Name", "Jaret")
// Sets Key as "Name" and Value as "Jaret"

sessionStorage.setItem("Age", "31")
// Sets Key as "Age" and Value as "31"

localStorage.setItem("Name", "Sally")
// Updates local item set previously

sessionStorage.removeItem("Age")
// Removes previously set item Age

console.log(localStorage.getItem("Name"))

// Cookies
const date = new Date(9999, 0, 1).toUTCString() // Date will basically never happen
document.cookie = `name=Jaret; expires=${date}`
document.cookie = `age=31; expires=${date}`
document.cookie = console.log(document.cookies) // document.cookies gets all cookies

// Delete cookies
const pastDate = new Date(1999, 0, 1).toUTCString()
document.cookie = `name=; expires=${pastDate}`
