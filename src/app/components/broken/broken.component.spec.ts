import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenComponent } from './broken.component';

describe('BrokenComponent', () => {
  let component: BrokenComponent;
  let fixture: ComponentFixture<BrokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
