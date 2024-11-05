"use strict";
// Seleciona elementos do DOM
const taskInput = document.getElementById("task");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
// Função para adicionar uma nova tarefa à lista
function addTask() {
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
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
