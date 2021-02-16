import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExDataBindingComponent } from './ex-data-binding.component';

describe('ExDataBindingComponent', () => {
  let component: ExDataBindingComponent;
  let fixture: ComponentFixture<ExDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
