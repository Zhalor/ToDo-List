import { createProject, createTask } from "./DOM";

const projectBtn = document.getElementById('add-project-btn');
const addTaskBtn = document.getElementById('add-task-btn');
const taskForm = document.getElementById('task-form');
const projectForm = document.getElementById('project-form');

projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createProject(e.target[0].value);
});

projectBtn.addEventListener('click', () => {
  document.getElementById('project-form-container').style.display = 'block';
});

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target.dataset.projectIndex);
  createTask(e.target.dataset.projectIndex);
});

addTaskBtn.addEventListener('click', () => {
  const projects = document.querySelectorAll(".project");
  if(projects.length > 0) {
    document.getElementById('task-form-container').style.display = 'block';
  }
});