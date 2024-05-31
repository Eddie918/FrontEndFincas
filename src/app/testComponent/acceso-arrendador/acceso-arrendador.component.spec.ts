import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoArrendadorComponent } from './acceso-arrendador.component';

describe('AccesoArrendadorComponent', () => {
  let component: AccesoArrendadorComponent;
  let fixture: ComponentFixture<AccesoArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccesoArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
