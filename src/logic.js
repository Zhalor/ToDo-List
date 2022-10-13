import { appendProject, appendTask } from "./DOM";

let arrProjects = [];

class Project {
  constructor(title, tasks) {
    this.title = title;
    this.tasks = tasks;
  }
  removeProject() {
    arrProjects.splice(arrProjects.indexOf(this), 1);
  }
  
  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}

class Task {
  constructor(title, desc, duedate, priority, complete) {
    this.title = title;
    this.desc = desc;
    this.duedate = duedate;
    this.priority = priority;
    this.complete = complete;
  }
}

function createProjectClass(title, []) {
  const project = new Project(title, []);
  arrProjects.push(project);
  return project;
}

function createTaskClass(title, desc, duedate, priority, complete, projectIndex) {
  const task = new Task(title, desc, duedate, priority, complete);
  arrProjects[projectIndex].addTask(task);
  return task;
}

function getLocalStorage() {
  if(localStorage.length > 0) {
    const storageValue = JSON.parse(localStorage.getItem('projects'));
    for(let obj of storageValue) {
      const project = new Project(obj.title, obj.tasks);
      arrProjects.push(project);
      appendProject(project);
    };
    const firstProject = arrProjects[0];
    if(firstProject !== undefined) {
      document.getElementById('project-header').innerText = firstProject.title;
      document.getElementById('task-form').dataset.projectIndex = 0;
      for(let task of firstProject.tasks) {
        appendTask(0, firstProject.tasks.indexOf(task));
      }
    }
  }
}

function setLocalStorage() {
  localStorage.setItem('projects', JSON.stringify(arrProjects));
}

getLocalStorage();

export {createProjectClass, createTaskClass, setLocalStorage, arrProjects}