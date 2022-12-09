import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualBreathingComponent } from './equal-breathing.component';

describe('EqualBreathingComponent', () => {
  let component: EqualBreathingComponent;
  let fixture: ComponentFixture<EqualBreathingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqualBreathingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqualBreathingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
