import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbPasswordComponent } from './wb-password.component';

describe('WbPasswordComponent', () => {
  let component: WbPasswordComponent;
  let fixture: ComponentFixture<WbPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
