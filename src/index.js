document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const inputField = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskDescription = inputField.value;
    if (taskDescription.trim() !== '') {
      const li = document.createElement('li');
      const text = document.createTextNode(taskDescription);
      li.appendChild(text);
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        li.remove();
      });
      li.appendChild(deleteButton);
      taskList.appendChild(li);

      inputField.value = '';
    }
  });
});
