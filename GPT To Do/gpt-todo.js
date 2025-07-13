const form = document.getElementById("todo-form")
const taskInput = document.getElementById("task-input")
const prioritySelect = document.getElementById("priority-select")
const taskList = document.getElementById("task-list")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const taskText = taskInput.value.trim()
})
