import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaluteComponentComponent } from './salute-component.component';

describe('SaluteComponentComponent', () => {
  let component: SaluteComponentComponent;
  let fixture: ComponentFixture<SaluteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaluteComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaluteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
