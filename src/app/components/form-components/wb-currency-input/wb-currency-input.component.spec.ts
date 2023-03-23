import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbCurrencyInputComponent } from './wb-currency-input.component';

describe('WbCurrencyInputComponent', () => {
  let component: WbCurrencyInputComponent;
  let fixture: ComponentFixture<WbCurrencyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbCurrencyInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbCurrencyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
