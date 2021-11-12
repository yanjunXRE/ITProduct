import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subhome1Component } from './subhome1.component';

describe('Subhome1Component', () => {
  let component: Subhome1Component;
  let fixture: ComponentFixture<Subhome1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subhome1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subhome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
