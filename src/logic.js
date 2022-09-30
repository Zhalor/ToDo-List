arrProjects = []

class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  addTodo(todo) {
    this.todos.push(todo);
  }
  removeTodo(index, todo) {
    this.todos.splice(index, 1);
  }
}

class Todo {
  constructor(title, desc, duedate, priority) {

  }
}

