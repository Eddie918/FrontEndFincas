import { Component } from '@angular/core';
import { Propiedad } from '../../models/Propiedad';
import { PropiedadService } from '../../services/propiedad.service';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-propiedades',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule], // Importa NgbCarouselModule aquí
  templateUrl: './listar-propiedades.component.html',
  styleUrls: ['./listar-propiedades.component.css']
})
export class ListarPropiedadesComponent {

  propiedades: Propiedad[] = [];
  imagenPorDefecto: string = 'assets/images/finca1.jpg';

  constructor(
    private propiedadService: PropiedadService,
    private router: Router
  ){}



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

  consultarPropiedad(id: number|null|undefined): void {
    if (id != null) {
      this.router.navigate(['/propiedad', id]);
    } else {
      console.error('El ID de la propiedad no es válido');
    }
  }
}
