// eslint-disable-next-line import/no-cycle
import { getList } from './index.js';

// eventlistener to check the checkbox and change the task.
const addCheckListener = (taskNode, index) => {
  const check = taskNode.querySelector('.checkbox');
  check.checked = getList()[index].completed;
  if (check.checked) {
    check.nextElementSibling.classList.add('mark');
  }
  check.addEventListener('click', () => {
    check.classList.toggle('check');
    check.nextElementSibling.classList.toggle('mark');
    getList()[index].completed = !getList()[index].completed;
    localStorage.setItem('lists', JSON.stringify(getList()));
  });
  const inputText = taskNode.querySelector('.text');
  inputText.removeAttribute('readonly');
  inputText.addEventListener('keydown', () => {
    getList()[index].description = inputText.value;
    localStorage.setItem('lists', JSON.stringify(getList()));
  });
};

export default addCheckListener;
