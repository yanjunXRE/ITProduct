import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subhome2Component } from './subhome2.component';

describe('Subhome2Component', () => {
  let component: Subhome2Component;
  let fixture: ComponentFixture<Subhome2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subhome2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subhome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
