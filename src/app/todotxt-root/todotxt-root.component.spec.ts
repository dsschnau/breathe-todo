import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodotxtRootComponent } from './todotxt-root.component';

describe('TodotxtRootComponent', () => {
  let component: TodotxtRootComponent;
  let fixture: ComponentFixture<TodotxtRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodotxtRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodotxtRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
