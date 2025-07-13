const form = document.getElementById("todo-form")
const taskInput = document.getElementById("task-input")
const prioritySelect = document.getElementById("priority-select")
const taskList = document.getElementById("task-list")

form.addEventListener("submit", (e) => {
  // Listens for form submissions
  e.preventDefault() // Prevents the page from reloading on form submission

  const taskText = taskInput.value.trim() // Creates variable for task input text and trims any extra spaces before and after
  const priority = prioritySelect.value // Creates variable for the chosen priority

  console.log("Task:", taskText)
  console.log("Priority:", priority)

  const newTask = document.createElement("li") // Creates new list element for HTML
  newTask.textContent = taskText // Adds task input text to list item
  newTask.classList.add(priority) // Adds chosen priority as a class to the list item
  taskList.appendChild(newTask) // Adds new list item to the bottom of task list
  taskInput.value = "" // Resets the input field to nothing
})
