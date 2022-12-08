import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreatheRootComponent } from './breathe-root.component';

describe('BreatheRootComponent', () => {
  let component: BreatheRootComponent;
  let fixture: ComponentFixture<BreatheRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreatheRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreatheRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
