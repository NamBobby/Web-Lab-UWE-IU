//Le Thanh Phuong Nam_ITITWE19025

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const enterIcon = document.querySelector('.enter-icon-container');

// Function to add a new task
function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.display = 'none'; 
    checkbox.addEventListener('change', () => toggleTaskComplete(taskItem));

    const customCheckbox = document.createElement('span');
    customCheckbox.classList.add('custom-checkbox'); 
    customCheckbox.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked; 
        checkbox.dispatchEvent(new Event('change')); 
    });

    const taskContent = document.createElement('span');
    taskContent.classList.add('content'); 
    taskContent.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; // Dustbin icon
    deleteButton.addEventListener('click', () => deleteTask(taskItem));

    taskItem.appendChild(checkbox);
    taskItem.appendChild(customCheckbox);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}

// Function to handle task completion
function toggleTaskComplete(taskItem) {
    taskItem.classList.toggle('completed');
    
    if (taskItem.classList.contains('completed')) {
        taskList.appendChild(taskItem); 
    } else {
        taskList.insertBefore(taskItem, taskList.firstChild); 
    }
}

// Function to delete a task
function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && taskInput.value.trim() !== '') {
        addTask(taskInput.value.trim());
        taskInput.value = ''; 
    }
});

enterIcon.addEventListener('click', () => {
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value.trim());
        taskInput.value = ''; 
    }
});
