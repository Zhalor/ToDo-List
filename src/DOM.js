import { createProjectClass, createTaskClass, arrProjects } from "./logic.js";
let edit = false;
let projectHeader = document.getElementById('project-header');
const taskFormContainer = document.getElementById('task-form-container');
const taskForm = document.getElementById('task-form');

function createProject(projectName) {
  clearTask();
  const div = document.createElement('div');
  const p = document.createElement('p');
  const deleteBtn = document.createElement('span');

  projectHeader.innerText = projectName;
  div.classList.add('project');
  div.setAttribute('data-project-index', arrProjects.length);
  p.classList.add('mouse-effect');
  p.innerText = projectName;
  deleteBtn.classList.add('icon', 'delete-icon');
  document.getElementById('add-project-btn').disabled = false;

  p.addEventListener('click', () => {
    projectHeader.innerText = projectName;
    let projectIndex = div.dataset.projectIndex;
    document.getElementById('task-form').dataset.projectIndex = projectIndex;
    clearTask();
    for(let task of project.tasks) {
      appendTask(projectIndex, arrProjects[projectIndex].tasks.indexOf(task));
    }
  });

  deleteBtn.addEventListener('click', () => {
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
  div.append(p, deleteBtn);

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
  const expandBtn = document.createElement('span');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  const pTitle = document.createElement('p');
  const pDesc = document.createElement('p');
  const pDueDate = document.createElement('p');
  const pPriority = document.createElement('p');
  const editBtn = document.createElement('span');
  const deleteBtn = document.createElement('span');

  let taskIndex = arrProjects[projectIndex].tasks.length;
  let titleValue = document.getElementById('title').value;
  let descValue = document.getElementById('desc').value;
  let dueDateValue = document.getElementById('due-date').value;
  let priorityValue = document.getElementById('priority').value;

  div.classList.add('task');
  div.setAttribute('data-project-index', projectIndex);
  div.setAttribute('data-task-index', taskIndex);
  expandBtn.classList.add('expand');
  label.innerText = "Unfinished";
  label.classList.add('checkbox');
  checkbox.type = "checkbox";
  checkbox.classList.add('checkbox');
  pTitle.innerText = titleValue;
  pDesc.classList.add('desc');
  pDesc.innerText = descValue;
  pDueDate.innerText = dueDateValue;
  pPriority.innerText = priorityValue;
  let color = setPriorityColor(Number(priorityValue));
  pPriority.style.color = color;
  editBtn.classList.add('icon', 'edit-icon');
  deleteBtn.classList.add('icon', 'delete-icon');

  expandBtn.addEventListener('click', () => {
    if(expandBtn.classList.contains('rotate-up')) {
      expandBtn.classList.remove('rotate-up');
      expandBtn.classList.add('rotate-down');

      div.classList.add('task-expand');
      div.classList.remove('task-reduce');

      pDesc.classList.add('desc-expand');
    } else if (expandBtn.classList.contains('rotate-down')) {
      expandBtn.classList.remove('rotate-down');
      expandBtn.classList.add('rotate-up');

      div.classList.remove('task-expand');
      div.classList.add('task-reduce');

      pDesc.classList.remove('desc-expand');
    } else {
      expandBtn.classList.add('rotate-down');
      div.classList.add('task-expand');
      pDesc.classList.add('desc-expand');
    }
  });

  checkbox.addEventListener('click', () => {
    if(task.complete === false) {
      task.complete = true;
      label.innerText = "Complete";
      div.classList.add('complete');
    } else {
      task.complete = false;
      label.innerText = "Unfinished";
      div.classList.remove('complete');
    }
  });

  editBtn.addEventListener('click', () => {
    console.log(arrProjects[projectIndex].tasks.indexOf(task));
    console.log(arrProjects);
    edit = true;
    taskFormContainer.style.display = "block";
    taskForm.dataset.taskIndex = arrProjects[projectIndex].tasks.indexOf(task);
    fillEditForm(pTitle.innerText, pDesc.innerText, pDueDate.innerText, pPriority.innerText);
  });

  deleteBtn.addEventListener('click', () => {
    deleteTask(div, task);
  });

  document.getElementById('task-container').appendChild(div);
  div.append(expandBtn, checkbox, label, pTitle, pDesc, pDueDate, pPriority, editBtn, deleteBtn);

  document.getElementById('task-form').reset();
  document.getElementById('task-form-container').style.display = 'none';

  const task = createTaskClass(titleValue, descValue, dueDateValue, priorityValue, false, projectIndex);
}

function setPriorityColor(num) {
  switch (num) {
    case 1:
      return "red";;
    case 2:
      return "orange";
    case 3:
      return "green";
    case 4:
      return "blue";
 }
}

function appendTask(projectIndex, taskIndex) {
  const div = document.createElement('div');
  const expandBtn = document.createElement('span');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  const pTitle = document.createElement('p');
  const pDesc = document.createElement('p');
  const pDueDate = document.createElement('p');
  const pPriority = document.createElement('p');
  const editBtn = document.createElement('span');
  const deleteBtn = document.createElement('span');
  let task = arrProjects[projectIndex].tasks[taskIndex];

  div.classList.add('task');
  div.setAttribute('data-project-index', projectIndex);
  div.setAttribute('data-task-index', taskIndex);
  checkbox.type = "checkbox";
  checkbox.classList.add('checkbox');
  if(task.complete === true) {
    label.innerText = "Complete";
    checkbox.checked = true;
  } else {
    label.innerText = "Unfinished";
  }
  label.classList.add('checkbox');
  expandBtn.classList.add('expand');
  checkbox.type = "checkbox";
  checkbox.classList.add('checkbox');
  pTitle.innerText = task.title;
  pDesc.classList.add('desc');
  pDesc.innerText = task.desc;
  pDueDate.innerText = task.duedate;
  let color = setPriorityColor(Number(task.priority));
  pPriority.style.color = color;
  pPriority.innerText = task.priority;
  editBtn.classList.add('icon', 'edit-icon');
  deleteBtn.classList.add('icon', 'delete-icon');

  expandBtn.addEventListener('click', () => {
    if(expandBtn.classList.contains('rotate-up')) {
      expandBtn.classList.remove('rotate-up');
      expandBtn.classList.add('rotate-down');

      div.classList.add('task-expand');
      div.classList.remove('task-reduce');

      pDesc.classList.add('desc-expand');
    } else if (expandBtn.classList.contains('rotate-down')) {
      expandBtn.classList.remove('rotate-down');
      expandBtn.classList.add('rotate-up');

      div.classList.remove('task-expand');
      div.classList.add('task-reduce');

      pDesc.classList.remove('desc-expand');
    } else {
      expandBtn.classList.add('rotate-down');
      div.classList.add('task-expand');
      pDesc.classList.add('desc-expand');
    }
  });

  editBtn.addEventListener('click', () => {
    edit = true;
    taskFormContainer.style.display = "block";
    taskForm.dataset.taskIndex = taskIndex;
    fillEditForm(pTitle.innerText, pDesc.innerText, pDueDate.innerText, pPriority.innerText);
  });

  deleteBtn.addEventListener('click', () => {
    deleteTask(div, task);
  })

  document.getElementById('task-container').appendChild(div);
  div.append(expandBtn, checkbox, label, pTitle, pDesc, pDueDate, pPriority, editBtn, deleteBtn);
}

function clearTask() {
  const container = document.getElementById('task-container');
  while(container.hasChildNodes() && container.childElementCount > 1) {
    container.removeChild(container.lastChild);
  }
}

function fillEditForm(title, desc, duedate, priority) {
  document.getElementById('title').value = title;
  document.getElementById('desc').value = desc;
  document.getElementById('due-date').value = duedate;
  document.getElementById('priority').value = priority;
}

function editTask(projectIndex, taskIndex, ...formValues) {
  const div = document.querySelector(`div.task[data-task-index="${taskIndex}"]`);
  const task = arrProjects[projectIndex].tasks[taskIndex];
  const node = div.childNodes;
  let color = setPriorityColor(Number(formValues[3]));
  node[6].style.color = color;
  node[3].innerText = formValues[0];
  node[4].innerText = formValues[1];
  node[5].innerText = formValues[2];
  node[6].innerText = formValues[3];
  task.title = formValues[0];
  task.desc = formValues[1];
  task.duedate = formValues[2];
  task.priority = formValues[3];
  taskForm.reset();
  taskFormContainer.style.display = "none";
  edit = false;
}

function deleteTask(div, task) {
  let index = div.dataset.projectIndex;
  div.remove();
  arrProjects[index].removeTask(task);
  const tasks = document.querySelectorAll('.task');
  for(let i in arrProjects[index].tasks) {
    tasks[i].dataset.taskIndex = i;
  }
}

createProject("Default");

export { createProject, createTask, editTask, edit }