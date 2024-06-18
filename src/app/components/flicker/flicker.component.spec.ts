import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickerComponent } from './flicker.component';

describe('FlickerComponent', () => {
  let component: FlickerComponent;
  let fixture: ComponentFixture<FlickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
