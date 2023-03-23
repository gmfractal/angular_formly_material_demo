import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbNumberInputComponent } from './wb-number-input.component';

describe('WbNumberInputComponent', () => {
  let component: WbNumberInputComponent;
  let fixture: ComponentFixture<WbNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbNumberInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
