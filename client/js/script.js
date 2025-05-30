const API_URL = 'http://localhost:8080/todos';
const form = document.getElementById('todo-form');
const list = document.getElementById('todo-list');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newTodo = {
        nome: form.name.value,
        descricao: form.description.value,
        prioridade: parseInt(form.priority.value),
        realizado: false
    };

    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo)
    });

    if (res.ok) {
        form.reset();
        loadTodos();
    }
});

async function loadTodos() {
    list.innerHTML = '';
    const res = await fetch(API_URL);
    const todos = await res.json();

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
      <input type="checkbox" ${todo.realizado ? 'checked' : ''} onchange="toggleRealizado(${todo.id}, this.checked)">
      <strong>${todo.nome}</strong> - ${todo.descricao} 
      <br><small>Prioridade: ${prioridadeTexto(todo.prioridade)}</small>
      <button class="delete-btn" onclick="deleteTodo(${todo.id})">X</button>
    `;
        list.appendChild(li);
    });
}

async function deleteTodo(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadTodos();
}

async function toggleRealizado(id, realizado) {
    const res = await fetch(API_URL);
    const todos = await res.json();
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    todo.realizado = realizado;

    await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    });

    loadTodos();
}

function prioridadeTexto(nivel) {
    switch (nivel) {
        case 1: return 'Baixa';
        case 2: return 'Média';
        case 3: return 'Alta';
        default: return 'Desconhecida';
    }
}

loadTodos();
