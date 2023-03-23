import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbCheckboxWrapperComponent } from './wb-checkbox-wrapper.component';

describe('WbCheckboxWrapperComponent', () => {
  let component: WbCheckboxWrapperComponent;
  let fixture: ComponentFixture<WbCheckboxWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbCheckboxWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbCheckboxWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
