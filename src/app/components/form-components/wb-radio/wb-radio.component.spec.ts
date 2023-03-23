import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbRadioComponent } from './wb-radio.component';

describe('WbRadioComponent', () => {
  let component: WbRadioComponent;
  let fixture: ComponentFixture<WbRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
