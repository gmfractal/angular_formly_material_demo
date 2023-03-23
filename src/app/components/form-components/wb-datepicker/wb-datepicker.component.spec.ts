import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbDatepickerComponent } from './wb-datepicker.component';

describe('WbDatepickerComponent', () => {
  let component: WbDatepickerComponent;
  let fixture: ComponentFixture<WbDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
