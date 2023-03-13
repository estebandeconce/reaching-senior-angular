import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronometerComponentComponent } from './chronometer-component.component';

describe('ChronometerComponentComponent', () => {
  let component: ChronometerComponentComponent;
  let fixture: ComponentFixture<ChronometerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChronometerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronometerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
