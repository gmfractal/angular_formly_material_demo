import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbSlideToggleComponent } from './wb-slide-toggle.component';

describe('WbSlideToggleComponent', () => {
  let component: WbSlideToggleComponent;
  let fixture: ComponentFixture<WbSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbSlideToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
