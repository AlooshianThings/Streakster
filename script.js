let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
    const activity = document.getElementById('activity').value;
    if (activity) {
        const task = {
            name: activity,
            streak: 0,
            dates: [] // Store all update dates
        };
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        document.getElementById('activity').value = '';
    }
}

function displayTasks() {
    const tasksList = document.getElementById('tasks');
    tasksList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.name;
        li.onclick = () => {
            location.href = `task/task.html?task=${index}`;
        };
        tasksList.appendChild(li);
    });
}

window.onload = displayTasks;
