// eslint-disable-next-line import/no-cycle
import formTask from './newTasks.js';
// eslint-disable-next-line import/no-cycle
import renderTasks from './render.js';
import './style.css';

export function newsTask(description, index) {
  return {
    description,
    completed: false,
    index,
  };
}

let list = [];

export function getList() {
  return list;
}

export const listContainer = document.querySelector('.content');

export function createList(task) {
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

// delete all task checked
const deleteTask = () => {
  list = list.filter((t) => !t.completed);
  localStorage.setItem('lists', JSON.stringify(list));
  renderTasks(list);
};

const deleteOne = (taskNode) => {
  const deleteOnee = taskNode.querySelector('.btn-right');
deleteOnee.addEventListener('click', () => {
list.splice
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
