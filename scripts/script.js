console.log("JavaScript working!");
document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todo-input');
    const guardarBtn = document.getElementById('guardar-btn');
    const todoList = document.getElementById('todo-list');
  
    guardarBtn.addEventListener('click', function () {
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
        addTodoItem(todoText);
      }
    });
  
    function addTodoItem(text) {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          todoItem.classList.add('completed');
        } else {
          todoItem.classList.remove('completed');
        }
      });
  
      const todoText = document.createElement('span');
      todoText.textContent = text;
  
      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Cancelar';
      cancelBtn.addEventListener('click', function () {
        todoList.removeChild(todoItem);
      });
  
      todoItem.appendChild(checkbox);
      todoItem.appendChild(todoText);
      todoItem.appendChild(cancelBtn);
  
      todoList.appendChild(todoItem);
    }
  });
  
