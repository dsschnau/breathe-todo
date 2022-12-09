import {
  Component,
  OnInit,
} from '@angular/core';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ITodo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import {
  TodoItemModalComponent,
} from '../todo-item-modal/todo-item-modal.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todos: BehaviorSubject<Array<ITodo>> = new BehaviorSubject<Array<ITodo>>([]);
  todo$: Observable<Array<ITodo>> = this.todos.asObservable();

  constructor(private todoService: TodoService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.todoService.todo$.subscribe(todos => this.todos.next(todos));
  }

  markComplete(todo: ITodo) {
    this.todoService.complete(todo);
  }

  addNew() {
    this.modalService.open(TodoItemModalComponent, { backdrop : 'static', keyboard : false});
  }

  edit(todo: ITodo) {
    const modelRef = this.modalService.open(TodoItemModalComponent, { backdrop : 'static', keyboard : false});
    modelRef.componentInstance.todo = todo;
  }

  delete(todo: ITodo) {
    this.todoService.delete(todo);
  }
}
