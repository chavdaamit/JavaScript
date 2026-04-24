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


<tr>

<td><h5>${task.title}</h5></td>
<td><p>${task.desc}</p></td>
<td><button class="btn btn-warning btn-sm mb-4" onclick="editTask(${task.id})">Edit</button></td>
<td><button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Delete</button></td>
</tr>




`;
  });
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}


function editTask(id) {
let task = tasks.find(t => t.id === id);

document.getElementById("taskId").value = task.id;
document.getElementById("title").value = task.title;
document.getElementById("description").value = task.desc;
}


function clearForm() {
  document.getElementById("taskId").value = "";
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}

window.onload = displayTasks;
