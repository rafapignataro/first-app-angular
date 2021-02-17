import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExDiretivasComponent } from './ex-diretivas.component';

describe('ExDiretivasComponent', () => {
  let component: ExDiretivasComponent;
  let fixture: ComponentFixture<ExDiretivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExDiretivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
