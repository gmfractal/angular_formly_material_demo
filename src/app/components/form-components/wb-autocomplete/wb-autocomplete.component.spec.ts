import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbAutocompleteComponent } from './wb-autocomplete.component';

describe('WbAutocompleteComponent', () => {
  let component: WbAutocompleteComponent;
  let fixture: ComponentFixture<WbAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
