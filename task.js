// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button>Remove</button>
        `;
        
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const removeBtn = li.querySelector('button');
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
    }
});
