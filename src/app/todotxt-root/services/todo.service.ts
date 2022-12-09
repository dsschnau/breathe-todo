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

  private prioritySource: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(new Array<string>("(A)", "(B)", "(C)", "(D)", "(E)"));
  public readonly prioritie$ = this.prioritySource.asObservable();

  constructor(private todoStorageService: TodoStorageService) {
    this.loadData();
  }

  loadData() {
    this.todoSource.next(this.getTodosFromStorage());
  }

  create(todo: ITodo) {
    let todos = this.getTodosFromStorage();
    todos.push(todo);
    this.saveTodos(todos);
  }

  update() {
    this.saveTodos(this.todoSource.value);
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

  delete (todo: ITodo) {
    let todos = this.getTodosFromStorage();
    const foundTodos = todos.filter(t => t.toString() !== todo.toString());
    this.saveTodos(foundTodos);
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
