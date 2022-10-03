import { createProjectClass, createTaskClass, arrProjects } from "./logic.js";

function createProject(nameValue) {
  const div = document.createElement('div');
  const p = document.createElement('p');
  const btn = document.createElement('button');

  div.classList.add('project');
  div.setAttribute('data-project-index', arrProjects.length);
  p.classList.add('mouse-effect');
  p.innerText = nameValue;
  btn.classList.add('close-btn');
  btn.innerText = "X";
  document.getElementById('add-project-btn').disabled = false;

  p.addEventListener('click', () => {
    document.getElementById('task-form').dataset.projectIndex = div.dataset.projectIndex;
  });

  btn.addEventListener('click', () => {
    deleteProject(div, project);
  });

  while(div.hasChildNodes()) {
    div.removeChild(div.lastChild);
  }

  document.getElementById('projects-container').appendChild(div);
  div.append(p, btn);

  document.getElementById('task-form').dataset.projectIndex = div.dataset.projectIndex;
  document.getElementById('project-form').reset();
  document.getElementById('project-form-container').style.display = 'none';

  const project = createProjectClass(p.innerText);
}

function deleteProject(div, project) {
  let index = div.dataset.projectIndex;
  div.remove();
  project.removeProject();
  if(index > 0) {
    document.getElementById('task-form').dataset.projectIndex = index - 1;
  }
  const projectTasks = document.querySelectorAll(`div.task[data-project-index="${index}"]`);
  for(let task of projectTasks) {
    task.remove();
  }
  const projects = document.querySelectorAll('.project');
  for(let i in arrProjects) {
    projects[i].setAttribute('data-project-index', i);
  }
}

function createTask(projectIndex) {
  const div = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const pTitle = document.createElement('p');
  const pDesc = document.createElement('p');
  const pDueDate = document.createElement('p');
  const pPriority = document.createElement('p');
  const btn = document.createElement('button');

  let titleValue = document.getElementById('title').value;
  let descValue = document.getElementById('desc').value;
  let dueDateValue = document.getElementById('due-date').value;
  let priorityValue = document.getElementById('priority').value;

  div.classList.add('task');
  div.setAttribute('data-project-index', projectIndex);
  label.innerText = "Unfinished";
  input.type = "checkbox";
  input.classList.add('checkbox');
  pTitle.innerText = titleValue;
  pDesc.classList.add('desc');
  pDesc.innerText = descValue;
  pDueDate.innerText = dueDateValue;
  pPriority.innerText = priorityValue;
  btn.classList.add('close-btn');
  btn.innerText = "X";

  btn.addEventListener('click', () => {
    deleteTask(div, task);
  })

  document.getElementById('task-container').appendChild(div);
  div.append(label, pTitle, pDesc, pDueDate, pPriority, btn);
  label.appendChild(input);

  document.getElementById('task-form').reset();
  document.getElementById('task-form-container').style.display = 'none';

  const task = createTaskClass(titleValue, descValue, dueDateValue, priorityValue, false, projectIndex);
}

function deleteTask(div, task) {
  let index = div.dataset.projectIndex;
  div.remove();
  arrProjects[index].removeTask(task);
}

createProject("Default");

export { createProject, createTask }