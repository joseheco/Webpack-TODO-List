// eslint-disable-next-line import/no-cycle
import { getList, newsTask } from './index.js';
// eslint-disable-next-line import/no-cycle
import renderTasks from './render.js';

// create each task
const formTask = () => {
  const form = document.getElementById('task-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const description = document.getElementById('task-input').value;
    const index = getList().length + 1;
    const t = newsTask(description, index);
    getList().push(t);
    localStorage.setItem('lists', JSON.stringify(getList()));
    renderTasks(getList());
  });
};

export default formTask;
