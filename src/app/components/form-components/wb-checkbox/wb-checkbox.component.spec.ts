import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbCheckboxComponent } from './wb-checkbox.component';

describe('WbCheckboxComponent', () => {
  let component: WbCheckboxComponent;
  let fixture: ComponentFixture<WbCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
