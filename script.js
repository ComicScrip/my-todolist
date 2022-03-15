const newTaskForm = document.getElementById('newTaskForm');
const newTaskInput = document.getElementById('newTaskInput');
const tasksTable = document.getElementById('taskTable');

console.log(newTaskForm, newTaskInput);

newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTaskName = newTaskInput.value;

  const line = document.createElement('tr');
  const titleElement = document.createElement('td');
  titleElement.innerHTML = newTaskName;
  titleElement.addEventListener('click', () => {
    titleElement.classList.toggle('done');
  });

  line.appendChild(titleElement);
  tasksTable.appendChild(line);
  newTaskInput.value = '';
});
