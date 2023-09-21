// Initializing task counter with a value of 2
let tasks = 2;

// Function to delete a todo item
function DeleteTodo(itemNumber) {
    // Get the todo item by its ID
    const item = document.getElementById("item" + itemNumber);
    // Remove the item from the DOM
    item.parentNode.removeChild(item);
}

// Function to add a new todo item
function AddTodo() {
    // Create a new div to contain the todo item
    let divContaier = document.createElement("div");
    divContaier.classList.add("todo");
    divContaier.id = "item" + tasks;

    // Create a checkbox for the todo item
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "todocheck" + tasks;

    // Create a span for the custom checkbox visual
    let span = document.createElement("span");
    span.classList.add("checkmark");
    span.setAttribute("onclick", `TaskChange(${tasks})`);

    // Create a textbox for the todo content
    let textbox = document.createElement("input");
    textbox.type = "text";
    textbox.id = "todotext" + tasks;

    // Create a delete button for the todo item
    let button = document.createElement("input");
    button.type = "button";
    button.value = "X";
    button.classList.add("delete-button");
    button.setAttribute("onclick", `DeleteTodo(${tasks})`);

    // Append all created elements to the todo container
    divContaier.append(checkbox, span, textbox, button);

    // Append the new todo container to the main todos list
    const todos = document.getElementById("todos");
    todos.append(divContaier);

    // Increment the task counter
    tasks++;
}

// Function to handle the change in task status (completed/not completed)
function TaskChange(x) {
    // Get the checkbox and textbox elements of the todo item
    const checkBoxTask = document.getElementById("todocheck" + x);
    const textBoxTask = document.getElementById("todotext" + x);

    // If the task is not checked, mark it as completed
    if (!checkBoxTask.checked) {
        checkBoxTask.checked = true;
        textBoxTask.classList.add("complete");
        textBoxTask.disabled = true;
    }
    // If the task is already marked as completed, unmark it
    else {
        checkBoxTask.checked = false;
        textBoxTask.classList.remove("complete");
        textBoxTask.disabled = false;
    }
}
