import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudConfirmacionComponent } from './solicitud-confirmacion.component';

describe('SolicitudConfirmacionComponent', () => {
  let component: SolicitudConfirmacionComponent;
  let fixture: ComponentFixture<SolicitudConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudConfirmacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
