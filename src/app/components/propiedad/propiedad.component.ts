import { Component, OnInit, Input } from '@angular/core';
import { Propiedad } from '../../models/Propiedad';
import { PropiedadService } from '../../services/propiedad.service';

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

  constructor(private propiedadService: PropiedadService) { }

  ngOnInit(): void {
    console.log(`propiedad : ${this.propiedadId}`);
    this.loadPropiedad();
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
    // Aquí puedes agregar la lógica para solicitar el arrendamiento
  }
}