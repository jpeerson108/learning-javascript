// 1. Select all elements
const form = document.querySelector("#new-item-form")
const list = document.querySelector("#list")
const input = document.querySelector("#item-input")

// 2. When I submit the form, add a new element
form.addEventListener("submit", (e) => {
  e.preventDefault()

  // 1. Create a new item
  const item = document.createElement("div")
  item.innerText = input.value
  item.classList.add("list-item")

  // 2. Add that item to the list
  list.appendChild(item)

  // 3. Clear the input in the form box
  input.value = ""

  // 4. Set up event listener to delete item when clicked
  item.addEventListener("click", () => {
    list.removeChild(item)
    // Could also say: item.remove()
  })
})
