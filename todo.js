const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const select = document.getElementById('priority-select');
const list = document.getElementById('task-list');
let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

function renderTasks() {
  list.innerHTML = '';
  tasks.forEach(({ text, priority }, idx) => {
    const li = document.createElement('li');
    li.dataset.priority = priority;
    li.innerHTML = `
      <span>${text}</span>
      <button onclick="deleteTask(${idx})">✕</button>
    `;
    list.appendChild(li);
  });
}

function saveAndRender() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

form.addEventListener('submit', e => {
  e.preventDefault();
  tasks.push({ text: input.value.trim(), priority: select.value });
  input.value = ''; select.value = 'low';
  saveAndRender();
});

window.deleteTask = idx => {
  tasks.splice(idx, 1);
  saveAndRender();
};

renderTasks();
