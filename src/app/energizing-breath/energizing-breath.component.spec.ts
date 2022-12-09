import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergizingBreathComponent } from './energizing-breath.component';

describe('EnergizingBreathComponent', () => {
  let component: EnergizingBreathComponent;
  let fixture: ComponentFixture<EnergizingBreathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergizingBreathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergizingBreathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
