import { createProject, createTask, editTask, edit } from "./DOM";

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
  if(edit === false) {
    createTask(e.target.dataset.projectIndex);
  } else if(edit === true) {
    editTask(e.target.dataset.projectIndex, e.target.dataset.taskIndex, e.target[0].value, e.target[1].value,
      e.target[2].value, e.target[3].value);
  }
});

addTaskBtn.addEventListener('click', () => {
  const projects = document.querySelectorAll(".project");
  if(projects.length > 0) {
    document.getElementById('task-form-container').style.display = 'block';
  }
});