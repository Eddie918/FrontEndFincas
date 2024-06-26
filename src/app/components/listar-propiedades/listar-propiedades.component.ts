import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router } from '@angular/router';
import { PropiedadService } from '../../services/propiedad.service';
import { LoginService } from '../../services/login.service';
import { Propiedad } from '../../models/Propiedad';

@Component({
  selector: 'app-listar-propiedades',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, RouterModule],
  templateUrl: './listar-propiedades.component.html',
  styleUrls: ['./listar-propiedades.component.css']
})
export class ListarPropiedadesComponent implements OnInit {

  propiedades: Propiedad[] = [];
  imagenPorDefecto: string = 'assets/images/finca1.jpg';

  constructor(
    private propiedadService: PropiedadService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.listarPropiedades();
  }

  listarPropiedades(): void {
    this.propiedadService.listarPropiedades()
      .then(response => {
        console.log('Data received: ', response);
        this.propiedades = response;
      })
      .catch(error => console.error('Hubo un error al listar las propiedades:', error));
  }

  consultarPropiedad(id: number | null | undefined): void {
    if (id != null) {
      this.router.navigate(['/propiedad', id]);
    } else {
      console.error('El ID de la propiedad no es válido');
    }
  }

  solicitarArrendamiento(id: number | null | undefined): void {
    if (id != null && this.isLoggedIn()) {
      const propiedad = this.propiedades.find(p => p.id_propiedad === id);
      if (propiedad) {
        const queryParams = {
          id: propiedad.id_propiedad,
          precio: propiedad.precio,
          ubicacion: propiedad.ubicacion,
          disponibilidad: propiedad.disponibilidad,
          descripcion: propiedad.descripcion
        };
        this.router.navigate(['/crear-solicitud'], { queryParams });
      } else {
        console.error('Propiedad no encontrada');
      }
    } else {
      console.error('El ID de la propiedad no es válido o el usuario no está autenticado');
    }
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }
}
