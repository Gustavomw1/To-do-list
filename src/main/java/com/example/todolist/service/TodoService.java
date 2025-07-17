package com.example.todolist.service;

// Define a classe como um serviço do Spring

// Injeta o repositório via construtor
// Cria um novo todo e retorna a lista atualizada
// Retorna todos os todos ordenados por prioridade (desc) e nome (asc)
// Atualiza um todo e retorna a lista atualizada
// Deleta um todo pelo ID e retorna a lista atualizada

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.todolist.entity.Todo;
import com.example.todolist.repository.TodoRepository;

@Service
public class TodoService {

    private TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> create(Todo todo) {
        todoRepository.save(todo);
        return list();
    }

    public List<Todo> list() {
        Sort sort = Sort.by("prioridade").descending().and(
                Sort.by("nome").ascending());
        return todoRepository.findAll(sort);
    }

    public List<Todo> update(Todo todo) {
        todoRepository.save(todo);
        return list();

    }

    public List<Todo> delete(Long id) {
        todoRepository.deleteById(id);
        return list();
    }
}
