import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExNgclassComponent } from './ex-ngclass.component';

describe('ExNgclassComponent', () => {
  let component: ExNgclassComponent;
  let fixture: ComponentFixture<ExNgclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExNgclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
