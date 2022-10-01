import { createProjectClass, createTaskClass, arrProjects } from "./logic.js";

function createProjectForm( ){
  const div = document.createElement('div');
  const input = document.createElement('input');
  const btn = document.createElement('button');

  div.classList.add('project');
  input.type = "text";
  input.placeholder = "Enter Project Name";
  btn.classList.add('create-project-btn');

  document.getElementById('projects-container').appendChild(div);
  div.append(input, btn);
  document.getElementById('add-project-btn').disabled = true;

  btn.addEventListener('click', () => {
    if(input.value == "" || input.length > 18) {
      input.classList.add('input-error')
      input.placeholder = "Name must be 1 to 18 characters"
    } else {
      createProject(div);
    }
  });

  input.addEventListener('keydown', (event) => {
    if(event.key === "Enter") {
      if(input.value == "" || input.length > 18) {
        input.classList.add('input-error')
        input.placeholder = "Name must be 1 to 18 characters"
      } else {
        createProject(div);
      }
    }
  });
}

function createProject(div) {
  const p = document.createElement('p');
  const btn = document.createElement('button');

  div.setAttribute('data-project-id', arrProjects.length);
  p.classList.add('mouse-effect');
  p.innerText = div.firstChild.value;
  btn.classList.add('close-btn');
  btn.innerText = "X";
  document.getElementById('add-project-btn').disabled = false;
  const project = createProjectClass(p.innerText);

  p.addEventListener('click', () => {
    const projects = document.querySelectorAll('.project');
    for(let project of projects) {
      project.classList.remove('open');
      div.classList.add('open');
    }
  });

  btn.addEventListener('click', () => {
    deleteProject(div, project);
  });

  while(div.hasChildNodes()) {
    div.removeChild(div.lastChild);
  }

  div.append(p, btn);
}

function deleteProject(div, project) {
  div.remove();
  project.removeProject();
  const projects = document.querySelectorAll('.project');
  for(let i in arrProjects) {
    projects[i].setAttribute('data-project-id', i);
  }
}

function createTask() {
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
    deleteTask(div);
  })

  document.getElementById('task-container').appendChild(div);
  div.append(label, pTitle, pDesc, pDueDate, pPriority, btn);
  label.appendChild(input);

  document.getElementById('task-form').reset();
  document.getElementById('task-form-container').style.display = 'none';

  createTaskClass(titleValue, descValue, dueDateValue, priorityValue, false, );
}

function deleteTask(div) {
  div.remove();
}

export { createProjectForm, createTask }