const form = document.querySelector("#new-todo-form")
const todoInput = document.querySelector("#todo-input")
const list = document.querySelector("#list")

// Add Todos
// User will type in todo and click add todo button.
form.addEventListener("submit", (e) => {
  e.preventDefault()

  const todoName = todoInput.value
  renderTodo(todoName)
})

// This should then add the todo to the list above.

// Delete Todos
// Complete Todos
// Save Todos
// Load Todos
