import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import { ITodo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todos: BehaviorSubject<Array<ITodo>> = new BehaviorSubject<Array<ITodo>>([]);
  todo$: Observable<Array<ITodo>> = this.todos.asObservable();

  @Output()
  addTodo: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  editTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.todo$.subscribe(todos => this.todos.next(todos));
  }

  markComplete(todo: ITodo) {
    this.todoService.complete(todo);
  }

  emitAddNew() {
    this.addTodo.emit();
  }

  emitEdit(todo: ITodo) {
    this.editTodo.emit(todo);
  }
}
