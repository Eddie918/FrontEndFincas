import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SolicitudService } from '../../services/solicitud.service';
import { Solicitud } from '../../models/Solicitud';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-solicitud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {
  solicitudForm: FormGroup;
  errorMessage: string = '';
  propiedad: any;

  constructor(
    private fb: FormBuilder,
    private solicitudService: SolicitudService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.solicitudForm = this.fb.group({
      duracion: ['', Validators.required],
      estado: ['', Validators.required],
      id_propiedad: ['', Validators.required]
    });

    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['login']);
    } else {
      const role = this.loginService.getRole();
      if (role !== 'ARRENDATARIO') {
        this.router.navigate(['access-denied']);
      }
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.propiedad = {
        id: params['id'],
        precio: params['precio'],
        ubicacion: params['ubicacion'],
        disponibilidad: params['disponibilidad'],
        descripcion: params['descripcion']
      };

      this.solicitudForm.patchValue({
        id_propiedad: params['id']
      });
    });
  }

  async onSubmit(): Promise<void> {
    if (this.solicitudForm.invalid) {
      return;
    }

    try {
      const solicitud: Solicitud = this.solicitudForm.value;
      await this.solicitudService.createSolicitud(solicitud);
      this.router.navigate(['/solicitud-aceptada'], { queryParams: this.propiedad }); // Redirige a la página de confirmación con los detalles de la propiedad
    } catch (error) {
      this.errorMessage = 'Error al crear la solicitud';
      console.error('Error al crear la solicitud', error);
    }
  }
}
