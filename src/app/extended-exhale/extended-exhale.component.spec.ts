import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedExhaleComponent } from './extended-exhale.component';

describe('ExtendedExhaleComponent', () => {
  let component: ExtendedExhaleComponent;
  let fixture: ComponentFixture<ExtendedExhaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedExhaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedExhaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
