// src/app/components/crear-solicitud/crear-solicitud.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { SolicitudService } from '../../services/solicitud.service';
import { PropiedadService } from '../../services/propiedad.service';
import { Solicitud } from '../../models/solicitud';
import { Propiedad } from '../../models/Propiedad';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-crear-solicitud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {
  solicitudForm: FormGroup;
  propiedades: Propiedad[] = [];
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private solicitudService: SolicitudService,
    private propiedadService: PropiedadService,
    private router: Router
  ) {
    this.solicitudForm = this.fb.group({
      duracion: ['', Validators.required],
      estado: ['', Validators.required],
      id_arrendador: ['', Validators.required],
      id_arrendatario: ['', Validators.required],
      id_propiedad: ['', Validators.required]
    });

    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.propiedadService.getPropiedadesDisponibles().then((data: Propiedad[]) => {
      this.propiedades = data;
    }).catch(error => {
      console.error('Error al obtener propiedades disponibles', error);
    });
  }

  onSubmit() {
    if (this.loginService.isLoggedIn()) {
      const solicitud = new Solicitud(
        null,
        this.solicitudForm.value.duracion,
        this.solicitudForm.value.estado,
        this.solicitudForm.value.id_arrendador,
        this.solicitudForm.value.id_arrendatario,
        this.solicitudForm.value.id_propiedad
      );
      this.solicitudService.createSolicitud(solicitud).subscribe(response => {
        console.log('Solicitud creada:', response);
        // Redirigir o mostrar mensaje de éxito
      }, error => {
        this.errorMessage = 'Error al crear la solicitud';
        console.error('Error al crear la solicitud', error);
      });
    } else {
      this.errorMessage = 'Por favor, inicia sesión para crear una solicitud';
    }
  }
}
