const url = 'http://localhost:3000';
const form = document.getElementById("newTaskForm");


//----------HELPER FUNCTIONS----------
// only deal with manipulating the UI
// ---TO DO: Create a function that will fetch the tasks from the database and display them in the table body---
async function displayTasks() {
    const tasks = await getTasks();
    const toDoList = document.getElementById("toDoList");

    toDoList.innerHTML = "";
    tasks.forEach(task => {
        toDoList.appendChild(formatTask(task))
    })
}



//--------API/CALLS FUNCTIONS--------
//Will deal with making API calls to the backend and return the data


// TO DO: Call the function to display tasks when the page loads

async function getTasks() {
    try {
        const params = new URLSearchParams();
        const completed = document.getElementById("taskFilter")?.value;
        if(completed) params.set("completed", completed);
        if(document.getElementById("sortDueDate")?.checked) params.set("sort", "dueDate");
    
        const res = await fetch(`${url}/tasks?${params}`);
        if(!res.ok) {
            const err = await res.json();
            return console.error(err.message, res.status);
        }

        const data = await res.json();
        return data.tasks;
    }
    catch (error) {
        console.error("Failed to get tasks: ", error);
    }
}


//TO DO: Create a function that will create a new task by making a POST request to the backend
async function createTask(){
    try {
        const taskData = {
            title: form.title.value.trim(),
            dueDate: form.dueDate.value
        }

        const res = await fetch(`${url}/tasks/new`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(taskData) 
        })

        // !false = true
        if(!res.ok) {
            const err = await res.json();
            return console.error(err.message, res.status);
        }
    
        const data = await res.json();
        form.reset();
        displayTasks();
        console.log(data.message, data.task);
        
    } catch (error) {
        console.error("Failed to create task: ", error);
    }
}

async function completeTask(id){
    try {
        const res = await fetch(`${url}/tasks/complete/${id}`, {
            method: "PATCH"
        });

        if(!res.ok) {
            const err = await res.json();
            return console.error(err.message, res.status);
        }

        const data = await res.json();
        displayTasks();
        console.log(data.message, data.task);

        } catch (error) {
            console.error('Failed to set task as complete', error);
        }
}

async function incompleteTask(id){
    try {
        const res = await fetch(`${url}/tasks/incomplete/${id}`, {
            method: "PATCH"
        });

        if(!res.ok) {
            const err = await res.json();
            return console.error(err.message, res.status);
        }

        const data = await res.json();
        displayTasks();
        console.log(data.message, data.task);

        } catch (error) {
            console.error('Failed to set task as incomplete', error);
        }
}

async function deleteTask(id){
    try {
        const res = await fetch(`${url}/tasks/delete/${id}`, {
            method: "DELETE"
        });

        if(!res.ok) {
            const err = await res.json();
            return console.error(err.message, res.status);
        }

        const data = await res.json();
        displayTasks();
        console.log(data.message, data.task);

        } catch (error) {
            console.error('Failed to delete task', error);
        }
}

async function editTask(){
    try{
        const updatedTaskData = {
            title: document.getElementById("editTitle").value.trim(),
            dueDate: document.getElementById("editDueDate").value
        }

        const res = await fetch(`${url}/tasks/edit/${editingId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedTaskData)
        })

        if(!res.ok) {
            const err = await res.json();
            return console.error(err.message, res.status);
        }

        const data = await res.json();
        console.log(data.message, data.task);
        bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
        displayTasks();
    }   
        catch (error) {
            console.error('Failed to edit task', error);
        }
    }

function formatTask(task) {
    const tr = document.createElement("tr");
    tr.classList.add("align-middle");
    const isComplete = task.completed;
    const complete = isComplete ? "opacity-50 text-decoration-line-through" : ""
    tr.innerHTML = `
    <th scope="row" class="${complete} task-title text-truncate w-75" style="max-width: 200px;">${task.title}</th>
    <td class="${complete} task-date" data-raw="${task.dueDate}">${new Date(task.dueDate).toLocaleDateString()}</td>
    <td class="text-end">
      <div class="d-flex justify-content-end">
      ${isComplete ?
        `<button class="btn btn-icon px-2" onclick="incompleteTask('${task._id}')"><i class="bi bi-x-square text-dark"></i></i></button>`
        :
        `<button class="btn btn-icon px-2" onclick="completeTask('${task._id}')"><i class="bi bi-check-square text-dark"></i></i></button>`
      }
        <button class="btn btn-icon px-2" onclick="openModal('${task._id}', '${task.title}', '${task.dueDate.slice(0, 10)}')"><i class="bi bi-pencil-square text-dark"></i></button>
        <button class="btn btn-icon px-2" onclick="deleteTask('${task._id}')"><i class="bi bi-trash text-dark"></i></button>
      </div>
    </td>
  `;
  return tr;
}

let editingId = null;
function openModal(id, title, dueDate) {
    editingId= id;
    document.getElementById("editTitle").value = title;
    document.getElementById("editDueDate").value = dueDate;
    new bootstrap.Modal(document.getElementById("editModal")).show();
}

//-----------------------------EVENT LISTENERS----------------------
window.addEventListener("DOMContentLoaded", () => {
    displayTasks();
    form.reset();
    document.getElementById("taskFilter").value = "";
    document.getElementById("sortDueDate").checked = false;
    document.getElementById("taskFilter").addEventListener("change", displayTasks);
    document.getElementById("sortDueDate").addEventListener("change", displayTasks);
});

//--When you click the submit button on the form--
form.addEventListener("submit", (event) => {
    event.preventDefault();
    createTask();
})

