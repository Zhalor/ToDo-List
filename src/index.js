import { createProjectForm, createTask } from "./DOM";

const projectBtn = document.getElementById('add-project-btn');
const addTaskBtn = document.getElementById('add-task-btn');
const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createTask();
})

addTaskBtn.addEventListener('click', () => {
  document.getElementById('task-form-container').style.display = 'block';
});

projectBtn.addEventListener('click', () => {
  createProjectForm();
});

