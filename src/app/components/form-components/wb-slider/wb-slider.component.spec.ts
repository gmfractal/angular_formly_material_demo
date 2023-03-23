import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbSliderComponent } from './wb-slider.component';

describe('WbSliderComponent', () => {
  let component: WbSliderComponent;
  let fixture: ComponentFixture<WbSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
