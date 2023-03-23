import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbArrayRendererComponent } from './wb-array-renderer.component';

describe('WbArrayRendererComponent', () => {
  let component: WbArrayRendererComponent;
  let fixture: ComponentFixture<WbArrayRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WbArrayRendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WbArrayRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
