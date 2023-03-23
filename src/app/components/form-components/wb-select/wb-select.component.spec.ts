import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbSelectComponent } from './wb-select.component';

describe('WbSelectComponent', () => {
  let component: WbSelectComponent;
  let fixture: ComponentFixture<WbSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
