const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // 1. Create a new <li> element
    const li = document.createElement("li");
    li.textContent = taskText;

    // 2. Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // 3. Remove task when delete button is clicked
    deleteBtn.onclick = function () {
        li.remove();
    };

    // 4. Put button inside li, and li inside ul
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // 5. Clear input field
    taskInput.value = "";
}

// Event Listeners
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
