import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaxingBreathComponent } from './relaxing-breath.component';

describe('RelaxingBreathComponent', () => {
  let component: RelaxingBreathComponent;
  let fixture: ComponentFixture<RelaxingBreathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelaxingBreathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelaxingBreathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
