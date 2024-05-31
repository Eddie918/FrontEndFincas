import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoArrendatarioComponent } from './acceso-arrendatario.component';

describe('AccesoArrendatarioComponent', () => {
  let component: AccesoArrendatarioComponent;
  let fixture: ComponentFixture<AccesoArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccesoArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
