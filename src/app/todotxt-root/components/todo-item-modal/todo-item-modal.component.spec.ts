import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { TodoItemModalComponent } from './todo-item-modal.component';

describe('TodoItemModalComponent', () => {
  let component: TodoItemModalComponent;
  let fixture: ComponentFixture<TodoItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
