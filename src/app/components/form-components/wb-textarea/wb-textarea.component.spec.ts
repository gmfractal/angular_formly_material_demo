import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbTextareaComponent } from './wb-textarea.component';

describe('WbTextareaComponent', () => {
  let component: WbTextareaComponent;
  let fixture: ComponentFixture<WbTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
