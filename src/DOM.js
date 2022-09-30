

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

  p.classList.add('mouse-effects');
  p.innerText = div.firstChild.value;
  btn.classList.add('close-btn');
  btn.innerText = "X";

  btn.addEventListener('click', () => {
    deleteProject(div);
  });

  while(div.hasChildNodes()) {
    div.removeChild(div.lastChild);
  }

  div.append(p, btn);
  document.getElementById('add-project-btn').disabled = false;
}

function deleteProject(div) {
  div.remove();
}

export { createProjectForm }