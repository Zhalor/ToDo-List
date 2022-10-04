const arrProjects = []

class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  removeProject() {
    arrProjects.splice(arrProjects.indexOf(this), 1);
  }
  
  addTask(task) {
    console.log(this.tasks);
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

function createProjectClass(title) {
  const project = new Project(title);
  arrProjects.push(project);
  return project;
}

function createTaskClass(title, desc, duedate, priority, complete, projectIndex) {
  const task = new Task(title, desc, duedate, priority, complete);
  arrProjects[projectIndex].addTask(task);
  return task;
}

export {createProjectClass, createTaskClass, arrProjects}