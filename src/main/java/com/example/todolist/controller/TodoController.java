package com.example.todolist.controller;

// Define que essa classe é um controlador REST

// Mapeia as requisições para o caminho "/todos"
// Libera o acesso CORS para essas URLs (útil para frontend rodando localmente)
// Injeta o serviço via construtor
// Cria um novo item na tabela todo
// Retorna a lista de todos os todos
// Atualiza um todo existente
// Deleta um todo pelo ID

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todolist.entity.Todo;
import com.example.todolist.service.TodoService;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = { "http://localhost:5500", "http://127.0.0.1:5500" })
public class TodoController {

    private TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping
    List<Todo> create(@RequestBody Todo todo) {
        return todoService.create(todo);
    }

    @GetMapping
    List<Todo> list() {
        return todoService.list();
    }

    @PutMapping
    List<Todo> update(@RequestBody Todo todo) {
        return todoService.update(todo);
    }

    @DeleteMapping("{id}")
    List<Todo> delete(@PathVariable("id") Long id) {
        return todoService.delete(id);
    }
}
