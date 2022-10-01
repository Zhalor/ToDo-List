const arrProjects = [
  {
    title: "Default",
    todos: []
  }]

class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  removeProject(project) {
    arrProjects.splice(arrProjects.indexOf(project), 1);
  }
  
  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(index, todo) {
    this.todos.splice(index, 1);
  }
}

class Todo {
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
  console.log(arrProjects);
  return project;
}

function createTaskClass(title, desc, duedate, priority, complete, projectIndex) {
  const todo = new Todo(title, desc, duedate, priority, complete);
  console.log(todo);
}

export {createProjectClass, createTaskClass, arrProjects}