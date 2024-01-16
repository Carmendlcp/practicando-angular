import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorMayorMenorEdadComponent } from './contador-mayor-menor-edad.component';

describe('ContadorMayorMenorEdadComponent', () => {
  let component: ContadorMayorMenorEdadComponent;
  let fixture: ComponentFixture<ContadorMayorMenorEdadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorMayorMenorEdadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContadorMayorMenorEdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
