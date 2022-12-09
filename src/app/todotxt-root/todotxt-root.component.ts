import { Component } from '@angular/core';

import { ITodo } from './models/todo';

@Component({
  selector: 'app-todotxt-root',
  templateUrl: './todotxt-root.component.html',
  styleUrls: ['./todotxt-root.component.css']
})
export class TodotxtRootComponent {

  showAddTodo: boolean = false;

  showTodoForm(show: boolean, todo?: ITodo) {
    this.showAddTodo = show;
  }
}
