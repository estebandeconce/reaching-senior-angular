import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCronometerComponent } from './new-cronometer.component';

describe('NewCronometerComponent', () => {
  let component: NewCronometerComponent;
  let fixture: ComponentFixture<NewCronometerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCronometerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCronometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
