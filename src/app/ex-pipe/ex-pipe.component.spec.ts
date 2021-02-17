import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExPipeComponent } from './ex-pipe.component';

describe('ExPipeComponent', () => {
  let component: ExPipeComponent;
  let fixture: ComponentFixture<ExPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
