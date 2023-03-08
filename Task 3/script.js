const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const pendingTasksList = document.getElementById("pending-tasks");
const completedTasksList = document.getElementById("completed-tasks");

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const newTaskText = newTaskInput.value;
  if (newTaskText !== "") {
    const newTask = document.createElement("li");
    newTask.innerText = `${newTaskText} (${getCurrentDateTime()})`;
    newTask.addEventListener("click", completeTask);
    pendingTasksList.appendChild(newTask);
    newTaskInput.value = "";
  }
}

function completeTask(event) {
  const completedTask = event.target;
  completedTask.classList.add("completed");
  completedTask.removeEventListener("click", completeTask);
  completedTask.addEventListener("click", removeTask);
  completedTasksList.appendChild(completedTask);
}

function removeTask(event) {
  const removedTask = event.target;
  removedTask.parentNode.removeChild(removedTask);
}

function getCurrentDateTime() {
  const now = new Date();
  const date = `${now.getFullYear()}-${addLeadingZero(now.getMonth() + 1)}-${addLeadingZero(now.getDate())}`;
  const time = `${addLeadingZero(now.getHours())}:${addLeadingZero(now.getMinutes())}:${addLeadingZero(now.getSeconds())}`;
  return `${date} ${time}`;
}

function addLeadingZero(number) {
  return number.toString().padStart(2, "0");
}
