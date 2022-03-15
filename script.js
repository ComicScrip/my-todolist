const newTaskForm = document.getElementById('newTaskForm');
const newTaskInput = document.getElementById('newTaskInput');
const tasksTable = document.getElementById('taskTable');

newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTaskName = newTaskInput.value;

  const line = document.createElement('tr');
  const titleElement = document.createElement('td');
  const actionElement = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';

  deleteBtn.addEventListener('click', () => {
    line.remove();
  });
  actionElement.appendChild(deleteBtn);

  titleElement.innerText = newTaskName;

  titleElement.addEventListener('click', () => {
    titleElement.classList.toggle('done');
  });

  line.appendChild(titleElement);
  line.appendChild(actionElement);
  tasksTable.appendChild(line);
  newTaskInput.value = '';
});
