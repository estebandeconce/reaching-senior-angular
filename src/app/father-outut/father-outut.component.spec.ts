import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherOututComponent } from './father-outut.component';

describe('FatherOututComponent', () => {
  let component: FatherOututComponent;
  let fixture: ComponentFixture<FatherOututComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherOututComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherOututComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
