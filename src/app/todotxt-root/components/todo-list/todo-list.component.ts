import { Component } from '@angular/core';

import { ITodo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(public todoService: TodoService) { }

  markComplete(todo: ITodo) {
    this.todoService.complete(todo);
  }
}
