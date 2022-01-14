// eslint-disable-next-line import/no-cycle
import { deleteOne, createList, listContainer } from './index.js';
// eslint-disable-next-line import/no-cycle
import addCheckListener from './status.js';

// render each task to follow the index.
const renderTasks = (taks) => {
  listContainer.innerHTML = '';
  taks.forEach((t, i) => {
    t.index = i + 1;
    const taskNode = createList(t);
    addCheckListener(taskNode, i);
    deleteOne(taskNode, i);
  });
};

export default renderTasks;