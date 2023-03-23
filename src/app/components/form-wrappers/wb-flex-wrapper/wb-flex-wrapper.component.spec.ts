import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbFlexWrapperComponent } from './wb-flex-wrapper.component';

describe('WbFlexWrapperComponent', () => {
  let component: WbFlexWrapperComponent;
  let fixture: ComponentFixture<WbFlexWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbFlexWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbFlexWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
