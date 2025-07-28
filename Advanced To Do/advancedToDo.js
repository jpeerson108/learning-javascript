const form = document.querySelector("#new-todo-form")
const todoInput = document.querySelector("#todo-input")
const list = document.querySelector("#list")
const template = document.querySelector("#list-item-template")
const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST" // String prefix for local storage
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos` // String key for local storage
let todos = loadTodos()
todos.forEach(renderTodo)

list.addEventListener("change", (e) => {
  if (!e.target.matches("[data-list-item-checkbox]")) return

  // Get the todo that is clicked on
  const parent = e.target.closest(".list-item")
  const todoId = parent.dataset.todoId
  const todo = todos.find((t) => t.id === todoId)
  todo.complete = e.target.checked
  // Toggle the complete property to be equal to the checkbox value
  // Save the updated todo
  saveTodos()
})

// Delete Todos
list.addEventListener("click", (e) => {
  if (!e.target.matches("[data-button-delete]")) return
  const parent = e.target.closest(".list-item")
  const todoId = parent.dataset.todoId
  // Remove the todo from the screen
  parent.remove()
  // Remove the todo from the list
  todos = todos.filter((todo) => todo.id !== todoId)
  // Save the new todos
  saveTodos()
})

// Add Todos
form.addEventListener("submit", (e) => {
  e.preventDefault()

  const todoName = todoInput.value
  if (todoName === "") return // Input must not be empty
  const newTodo = {
    name: todoName,
    complete: false,
    id: new Date().valueOf().toString(), // Sets ID to a string of the date down to the milisecond
  }
  todos.push(newTodo) // Adds new inputs to saved "todos" array
  renderTodo(newTodo) // Adds input to list
  saveTodos()
  todoInput.value = "" // Resets value to empty
})

function renderTodo(todo) {
  const templateClone = template.content.cloneNode(true) // Clones HTML template
  const listItem = templateClone.querySelector(".list-item")
  listItem.dataset.todoId = todo.id // Saves Id to each new HTML list item
  const textElement = templateClone.querySelector("[data-list-item-text]") // Selects list item
  textElement.innerText = todo.name
  const checkbox = templateClone.querySelector("[data-list-item-checkbox]")
  checkbox.checked = todo.complete
  list.appendChild(templateClone) // Adds template clone as list item
}

// Load Todos
function loadTodos() {
  const todosString = localStorage.getItem(TODOS_STORAGE_KEY)
  return JSON.parse(todosString) || [] // Takes string, converts to js object or array OR return an empty array
}

// Save Todos
function saveTodos() {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos)) // JSON.stringify converts to array syntax
}
