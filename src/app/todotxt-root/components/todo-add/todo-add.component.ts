import { Component } from '@angular/core';

import Todo from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  public todo: Todo = new Todo();
  public readonly priorityList: Array<string> = new Array<string>("(A)", "(B)", "(C)", "(D)", "(E)");

  constructor(private todoService: TodoService) { }

  add() {
    this.todoService.addTodo(this.todo);
  }
}
