// Show the body copy when the Expand button is clicked
//// Add the "show" property to the .card-body class
// Hide the body copy when the Collapse button is clicked
//// Remove the "show" property from the .card-body class
// Change "Expand" button to "Collapse" when body is showing

// Make sure your code still works even if you add new elements to the HTML using javascript

// Classes
//// Card: .card
//// Button: .expand-button
//// Header: .card-header
//// Card Body: .card-body
//// Card Body Show: .card-body show

// First Attempt - Function + Loop
// ----------------------------------------------------
const button = document.getElementsByClassName("expand-button")
const buttonArray = Array.from(button)

function toggleBody() {
  buttonArray.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      const body = btn.parentElement.nextElementSibling
      if (btn.textContent === "Expand") {
        body.classList.add("show")
        btn.textContent = "Collapse"
      } else {
        body.classList.remove("show")
        btn.textContent = "Expand"
      }
    })
  })
}
// toggleBody()

// Revised Version - Allows for future dynamic additions
// ----------------------------------------------------
document.addEventListener("click", (e) => {
  if (e.target.matches(".expand-button")) {
    e.preventDefault()
    const body = e.target.parentElement.nextElementSibling
    if (e.target.textContent === "Expand") {
      body.classList.add("show")
      e.target.textContent = "Collapse"
    } else {
      body.classList.remove("show")
      e.target.textContent = "Expand"
    }
  }
})
