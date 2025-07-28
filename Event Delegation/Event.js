{
  const buttons = document.querySelectorAll("button")

  document.addEventListener("click", () => {
    console.log("Clicked Document")
  })

  document.body.addEventListener("click", () => {
    console.log("Clicked Body")
  })

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Clicked Button")
    })
  })
}

// Event Loop
// Delegation - Adding one event listener to a parent to handle events from its children
// Capturing - Events go from the top (document) down to the target (element)
// Bubbling - Events go from the target element back up to the top
// .stopPropagation stops bubbling

// Event Delegation
// Creating new elements in js may not get selected in previous querySelectors
// Add eventListener to the docuement
// Event will only print on the button with the class of "cool"

document.addEventListener("click", (e) => {
  if (e.target.matches(".cool")) {
    console.log("Clicked Button")
  }
})

const newButton = document.createElement("button")
newButton.innerText = "Button 5"
document.body.append(newButton)
