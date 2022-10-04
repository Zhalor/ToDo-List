import { createProjectClass, createTaskClass, arrProjects } from "./logic.js";
let projectHeader = document.getElementById('project-header');

function createProject(projectName) {
  clearTask();
  const div = document.createElement('div');
  const p = document.createElement('p');
  const btn = document.createElement('button');

  projectHeader.innerText = projectName;
  div.classList.add('project');
  div.setAttribute('data-project-index', arrProjects.length);
  p.classList.add('mouse-effect');
  p.innerText = projectName;
  btn.classList.add('close-btn');
  btn.innerText = "X";
  document.getElementById('add-project-btn').disabled = false;

  p.addEventListener('click', () => {
    projectHeader.innerText = projectName;
    let projectIndex = div.dataset.projectIndex;
    document.getElementById('task-form').dataset.projectIndex = projectIndex;
    clearTask();
    for(let task of project.tasks) {
      appendTask(task.title, task.desc, task.duedate, task.priority, task.complete, projectIndex, projectName);
    }
  });

  btn.addEventListener('click', () => {
    let projectIndex = div.dataset.projectIndex;
    deleteProject(div, project);
    if(projectIndex > 0) {
      for(let task of arrProjects[projectIndex - 1].tasks) {
        appendTask(task.title, task.desc, task.duedate, task.priority, task.complete, projectIndex - 1, projectName);
      }
    }
  });

  while(div.hasChildNodes()) {
    div.removeChild(div.lastChild);
  }

  document.getElementById('task-container').appendChild(projectHeader);
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
    projectHeader.innerText = arrProjects[index - 1].title;
  } else {
    projectHeader.innerText = "";
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
  console.log(arrProjects);
}

function appendTask(title, desc, duedate, priority, complete, projectIndex) {
  const div = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const pTitle = document.createElement('p');
  const pDesc = document.createElement('p');
  const pDueDate = document.createElement('p');
  const pPriority = document.createElement('p');
  const btn = document.createElement('button');

  div.classList.add('task');
  div.setAttribute('data-project-index', projectIndex);
  if(complete === true) {
    label.innerText = "Complete";
  } else {
    label.innerText = "Unfinished";
  }
  input.type = "checkbox";
  input.classList.add('checkbox');
  pTitle.innerText = title;
  pDesc.classList.add('desc');
  pDesc.innerText = desc;
  pDueDate.innerText = duedate;
  pPriority.innerText = priority;
  btn.classList.add('close-btn');
  btn.innerText = "X";

  btn.addEventListener('click', () => {
    deleteTask(div, task);
  })

  document.getElementById('task-container').appendChild(div);
  div.append(label, pTitle, pDesc, pDueDate, pPriority, btn);
  label.appendChild(input);
}

function clearTask() {
  const container = document.getElementById('task-container');
  while(container.hasChildNodes() && container.childElementCount > 1) {
    container.removeChild(container.lastChild);
  }
}

function deleteTask(div, task) {
  let index = div.dataset.projectIndex;
  div.remove();
  arrProjects[index].removeTask(task);
}

createProject("Default");

export { createProject, createTask }