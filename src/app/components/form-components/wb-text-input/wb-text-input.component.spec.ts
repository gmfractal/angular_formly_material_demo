import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbTextInputComponent } from './wb-text-input.component';

describe('WbTextInputComponent', () => {
  let component: WbTextInputComponent;
  let fixture: ComponentFixture<WbTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbTextInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
