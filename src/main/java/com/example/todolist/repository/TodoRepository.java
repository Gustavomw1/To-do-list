package com.example.todolist.repository;

// Define a interface que lida com operações no banco de dados

// Estende JpaRepository para usar métodos prontos como save, findAll, delete, etc.
// Trabalha com a entidade Todo e o tipo de ID é Long

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todolist.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}
