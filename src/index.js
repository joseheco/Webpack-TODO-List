// eslint-disable-next-line import/no-cycle
import addCheckListener from './status.js';
// eslint-disable-next-line import/no-cycle
import formTask from './newTasks.js';
import './style.css';

export function newsTask(description, index) {
  return {
    description,
    completed: false,
    index,
  };
}

let list = [];

// function to dont use let for the list.
export function updateList(ls) {
  list = ls;
}

export function getList() {
  return list;
}

const listContainer = document.querySelector('.content');

function createList(task) {
  const listItem = document.createElement('div');
  listItem.className = 'list';

  const eachTasks = document.createElement('div');
  eachTasks.className = 'eachtask';
  listItem.appendChild(eachTasks);

  const box = document.createElement('input');
  box.type = 'checkbox';
  box.className = 'checkbox';
  eachTasks.appendChild(box);

  const newTask = document.createElement('input');
  newTask.className = 'text';
  newTask.type = 'text';
  newTask.value = task.description;
  newTask.setAttribute('readonly', 'readonly');
  eachTasks.appendChild(newTask);

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn-right';
  listItem.appendChild(btn);

  listContainer.appendChild(listItem);
  return listItem;
}

list.forEach((task) => createList(task));

// render each task to follow the index.
export function renderTasks(taks) {
  listContainer.innerHTML = '';
  taks.forEach((t, i) => {
    t.index = i;
    const taskNode = createList(t);
    addCheckListener(taskNode, i);
    deleteOne(taskNode);
  });
}

// delete all task checked
function deleteTask() {
  list = list.filter((t) => !t.completed);
  localStorage.setItem('lists', JSON.stringify(list));
  renderTasks(list);
}

const deleteOne = (taskNode) => {
  const deleteOnee = taskNode.querySelector('.btn-right');
deleteOnee.addEventListener('click', () => {
//list = list.filter((t) => t.index);
list.filter(function(element){
  return !element.index === 3;
})

renderTasks(list);
localStorage.setItem('lists', JSON.stringify(list));
})
}

const btnDelete = document.getElementById('delete');
btnDelete.addEventListener('click', deleteTask);


// save all info in localStorage
window.onbeforeunload = function () {
  localStorage.setItem('lists', JSON.stringify(list));
};

window.onload = function () {
  const tasks = localStorage.getItem('lists');
  list = JSON.parse(tasks) || [];
  renderTasks(list);
};

formTask();