const todoInput = document.getElementById('todo-input');
const guardarBtn = document.getElementById('guardar-btn');
const todoList = document.getElementById('todo-list');
const todoContainer = document.getElementById('todo-container'); 
const ordenarBtn = document.getElementById('ordenar-btn');

const tareas = []; // Crear un array vacío para almacenar las tareas

guardarBtn.addEventListener('click', function () {
  const todoText = todoInput.value.trim();
  if (todoText === '') {
    alert('Por favor, ingresa una tarea antes de hacer clic en el botón "Guardar".');
    return;
  }
  tareas.push(todoText); // Agregar la tarea al array
  todoInput.value = ''; // limpiar el campo de entrada después de agregar una tarea
  mostrarTareas();
});

const mostrarTareas = function() {
  todoList.innerHTML = ''; // Limpiar el contenedor de tareas
  tareas.forEach(function(tarea) {
    addTodoItem(tarea);
  });
};

const addTodoItem = function(text) {
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      todoItem.classList.add('completed');
      this.nextElementSibling.style.textDecoration = 'line-through';
      todoItem.style.backgroundColor = '#ffeeff'; 
    } else {
      todoItem.classList.remove('completed');
      this.nextElementSibling.style.textDecoration = 'none';
      todoItem.style.backgroundColor = ''; 
    }
  });

  const todoText = document.createElement('span');
  todoText.textContent = text;

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Eliminar';
  cancelBtn.classList.add('cancel-btn'); // Agregar la clase 'cancel-btn' al botón 'Cancelar'

  cancelBtn.addEventListener('click', function () {
    const confirmar = confirm('¿Estás seguro de que quieres eliminar esta tarea?');
    if (confirmar) {
      tareas.splice(tareas.indexOf(text), 1); // Eliminar la tarea del array de tareas
      todoList.removeChild(todoItem);
    }
  });

  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(cancelBtn);

  todoList.appendChild(todoItem);
};

ordenarBtn.addEventListener('click', function() {
  // Ordenar las tareas alfabéticamente
  tareas.sort(function(a, b) {
    let textA = a.toUpperCase();
    let textB = b.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });

  // Mostrar las tareas ordenadas
  mostrarTareas();
});