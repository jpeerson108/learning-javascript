const form = document.querySelector("#new-todo-form")
const todoInput = document.querySelector("#todo-input")
const list = document.querySelector("#list")
const template = document.querySelector("#list-item-template")
const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST" // String prefix for local storage
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos` // String key for local storage
const todos = loadTodos()
todos.forEach(renderTodo)

list.addEventListener("change", (e) => {
  if (!e.target.matches("[data-list-item-checkbox]")) return
})

// Add Todos
form.addEventListener("submit", (e) => {
  e.preventDefault()

  const todoName = todoInput.value
  if (todoName === "") return // Input must not be empty
  const newTodo = {
    name: todoName,
    complete: false,
  }
  todos.push(newTodo) // Adds new inputs to saved "todos" array
  renderTodo(newTodo) // Adds input to list
  saveTodos()
  todoInput.value = "" // Resets value to empty
})

function renderTodo(todo) {
  const templateClone = template.content.cloneNode(true) // Clones HTML template
  const textElement = templateClone.querySelector("[data-list-item-text]") // Selects list item
  textElement.innerText = todo.name
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

// Delete Todos
// Complete Todos
