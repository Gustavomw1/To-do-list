// Seleciona elementos do DOM
const taskInput = document.getElementById("task") as HTMLInputElement;
const addButton = document.getElementById("addButton") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

// Função para adicionar uma nova tarefa à lista
function addTask(): void {
  const taskText = taskInput.value.trim(); // Remove espaços em branco

  if (taskText.length === 0) {
    alert("Adicione uma tarefa.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Remover tarefa
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.onclick = () => taskList.removeChild(li);

  li.appendChild(removeButton);
  taskList.appendChild(li);

  taskInput.value = "";
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    addTask();
  }
});
