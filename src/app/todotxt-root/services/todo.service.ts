import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import Todo, { ITodo } from '../models/todo';
import { TodoStorageService } from '../services/todo-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoStorageKey = "todos";
  private todoSource: BehaviorSubject<Array<ITodo>> = new BehaviorSubject<Array<ITodo>>([]);
  public readonly todo$ = this.todoSource.asObservable();

  constructor(private todoStorageService: TodoStorageService) {
    this.loadData();
  }

  loadData() {
    this.todoSource.next(this.getTodosFromStorage());
  }

  addTodo(todo: ITodo) {
    let todos = this.getTodosFromStorage();
    todos.push(todo);
    this.saveTodos(todos);
  }

  complete(todo: ITodo) {
    let todos = this.getTodosFromStorage();
    const foundTodo = todos.find(t => t.toString() === todo.toString());
    if (foundTodo) {
      foundTodo.isComplete = true;
      foundTodo.completionDate = new Date();
      this.saveTodos(todos);
    }
  }

  private getTodosFromStorage(): Array<ITodo> {
    let todos = this.todoStorageService.getData(this.todoStorageKey);
    if (todos) {
      return todos.split('\r\n').map<ITodo>(line => new Todo(line));
    }

    return [];
  }

  private saveTodos(todos: Array<ITodo>) {

    this.todoStorageService.saveData(this.todoStorageKey, todos.map(t => t.toString()).join('\r\n'));
    this.loadData();
  }
}
