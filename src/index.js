import './style.css'

const list = [
  {
    description: 'Finish javascript project',
    completed: false,
    index: 0,
  },
  {
    description: 'Go to the supermarket',
    completed: false,
    index: 1,
  },
];

// Query selectors
const listContainer = document.querySelector('.content');

// Functions
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

  const newTask = document.createElement('div');
  newTask.className = 'text';
  newTask.textContent = task.description;
  eachTasks.appendChild(newTask);

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn-right';
  listItem.appendChild(btn);

  listContainer.appendChild(listItem);
  return listItem;
}

list.reverse().forEach((task) => createList(task));

const check = document.querySelectorAll('.checkbox');
check.forEach((value) => {
  value.addEventListener('click', () => {
    value.classList.toggle('check');
    value.nextElementSibling.classList.toggle('mark');
  });
});

//window.onload = createList;