import {
  Component,
  Input,
} from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import Todo, { ITodo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item-modal',
  templateUrl: './todo-item-modal.component.html',
  styleUrls: ['./todo-item-modal.component.css']
})
export class TodoItemModalComponent {

  private _todo: ITodo | undefined;

  @Input()
  public set todo(value: ITodo | undefined) {
    if (value) {
      this._todo = value;
      this.todoBeingEdited.priority = value.priority;
      this.todoBeingEdited.description = value.description;
    }
  }
  public get todo() { return this._todo; }

  todoBeingEdited: ITodo;

  constructor(public activeModal: NgbActiveModal, public todoService: TodoService) {
    this.todoBeingEdited = new Todo();
    this.todoBeingEdited.specialTags = ["id:" + uuidv4()];
  }

  save() {
    if (this.todo) {
      this.todo.priority = this.todoBeingEdited.priority;
      this.todo.description = this.todoBeingEdited.description;
      this.todoService.update();
    } else {
      this.todoService.create(this.todoBeingEdited);
    }

    this.activeModal.close();
  }

  cancel() {
    this.activeModal.dismiss();
  }

}
