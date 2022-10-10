import { createProject, createTask, editTask, edit } from "./DOM";

const projectBtn = document.getElementById('add-project-btn');
const addTaskBtn = document.getElementById('add-task-btn');
const projectForm = document.getElementById('project-form');
const taskForm = document.getElementById('task-form');
const projectModal = document.getElementById('project-modal');
const taskModal = document.getElementById('task-modal');
const closeBtn = document.querySelectorAll('.close-btn');

window.addEventListener('click', (e) => {
  if (e.target == projectModal) {
    projectModal.style.display = "none";
    projectForm.reset();
  } else if(e.target == taskModal) {
    taskModal.style.display = "none";
    taskForm.reset();
  }
});

closeBtn[0].addEventListener('click', () => {
  projectModal.style.display = "none";
  projectForm.reset();
});

closeBtn[1].addEventListener('click', () => {
  taskModal.style.display = "none";
  taskForm.reset();
});

projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createProject(e.target[0].value);
});

projectBtn.addEventListener('click', () => {
  projectModal.style.display = "block";
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
    taskModal.style.display = "block";
  }
});