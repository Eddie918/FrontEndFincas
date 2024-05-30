import { Component, OnInit, Input } from '@angular/core';

import { Propiedad } from '../../models/Propiedad';
import { PropiedadService } from '../../services/propiedad.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propiedad',
  standalone: true,
  imports: [],
  templateUrl: './propiedad.component.html',
  styleUrl: './propiedad.component.css'
})
export class PropiedadComponent implements OnInit {
  @Input() propiedadId!: number;
  propiedad: Propiedad | null = null;

  constructor(
    private route: ActivatedRoute,
    private propiedadService: PropiedadService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.propiedadId = +id; // Convertir el id a número
        console.log(`propiedad : ${this.propiedadId}`);
        this.loadPropiedad();
      } else {
        console.error('El ID de la propiedad no es válido');
      }
    });
  }

  loadPropiedad(): void {
    this.propiedadService.getPropiedad(this.propiedadId).then(propiedad => {
      this.propiedad = propiedad;
    }).catch(error => {
      console.error('Error al cargar la propiedad', error);
    });
  }

  solicitarArrendamiento(): void {
    console.log(`Solicitar arrendamiento para la propiedad con ID: ${this.propiedad?.id_propiedad}`);
    // Aquí se agregará la lógica para solicitar el arrendamiento
  }
}