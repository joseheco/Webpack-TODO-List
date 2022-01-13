// eslint-disable-next-line import/no-cycle
import { newsTask, renderTasks, getList } from './index.js';

// create each task 
function formTask() {
  const form = document.getElementById('task-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const description = document.getElementById('task-input').value;
    const index = getList().length;
    const t = newsTask(description, index);
    getList().push(t);
    localStorage.setItem('lists', JSON.stringify(getList()));
    renderTasks(getList());
  });
}

export default formTask;
