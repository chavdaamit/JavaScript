let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  let id = document.getElementById("taskId").value;
  let title = document.getElementById("title").value;
  let desc = document.getElementById("description").value;

  if (title === "") {
    alert("Title required!");
    return;
  }

  if (id) {
   
    tasks = tasks.map((task) => {
      if (task.id == id) {
        return { id: Number(id), title, desc };
      }
      return task;
    });
  } else {
   
    let task = {
      id: Date.now(),
      title,
      desc,
    };
    tasks.push(task);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  clearForm();
  displayTasks();
}

function displayTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task) => {
    list.innerHTML += `
<div class="card p-3 mb-2">
<h5>${task.title}</h5>
<p>${task.desc}</p>

<button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Delete</button>
</div>
`;
  });
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}



function clearForm() {
  document.getElementById("taskId").value = "";
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}

window.onload = displayTasks;
