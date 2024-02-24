document.addEventListener('DOMContentLoaded', function () {
  const todoInput = document.getElementById('todo-input');
  const guardarBtn = document.getElementById('guardar-btn');
  const todoList = document.getElementById('todo-list');
  const todoContainer = document.getElementById('todo-container'); // Agregar la variable todoContainer

  guardarBtn.addEventListener('click', function () {
    const todoText = todoInput.value.trim();
    if (todoText === '') {
      alert('Por favor, ingresa una tarea antes de hacer clic en el botón "Guardar".');
      return;
    }
    addTodoItem(todoText);
    todoInput.value = ''; // limpiar el campo de entrada después de agregar una tarea
  });

  function addTodoItem(text) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        todoItem.classList.add('completed');
        this.nextElementSibling.style.textDecoration = 'line-through';
        todoItem.style.backgroundColor = '#ffeeff'; // cambiar el color de fondo del elemento cuando el checkbox está marcado
      } else {
        todoItem.classList.remove('completed');
        this.nextElementSibling.style.textDecoration = 'none';
        todoItem.style.backgroundColor = ''; // restaurar el color de fondo original del elemento cuando el checkbox no está marcado
      }
    });

    const todoText = document.createElement('span');
    todoText.textContent = text;

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancelar';
    cancelBtn.classList.add('cancel-btn'); // Agregar la clase 'cancel-btn' al botón 'Cancelar'

    cancelBtn.addEventListener('click', function () {
      const confirmar = confirm('¿Estás seguro de que quieres cancelar esta tarea?');
      if (confirmar) {
        todoList.removeChild(todoItem);
      }
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(cancelBtn);

    todoList.appendChild(todoItem);
  }
});