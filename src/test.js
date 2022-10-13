let edit = false;
let projectHeader = document.getElementById('project-header');
const taskForm = document.getElementById('task-form');
const projectModal = document.getElementById('project-modal');
const taskModal = document.getElementById('task-modal');
let arrProjects = [];

function getLocalStorage() {
  if(localStorage.length === 0) {
    createProject("Default", projectHeader, projectModal);
  } else if(localStorage.getItem("projects") === []) {
    return [];
  } else {
    const storageValue = JSON.parse(localStorage.getItem('projects'));
      console.log('storageValue :', storageValue);
      for(let project of storageValue) {
        Project.prototype.removeProject.call(project);
        Project.prototype.addTask.call(project);
        Project.prototype.removeTask.call(project);
        createProject(project.title);
      }
    return storageValue;
  }
}