import { createProjectForm } from "./DOM";

const projectBtn = document.getElementById('add-project-btn');
const addTodoBtn = document.getElementById('add-todo-btn');
const toDoForm = document.getElementById('todo-form');

toDoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('todo-form-container').style.display = 'none';
})

addTodoBtn.addEventListener('click', (e) => {
  document.getElementById('todo-form-container').style.display = 'block';
});

projectBtn.addEventListener('click', () => {
  createProjectForm();
});