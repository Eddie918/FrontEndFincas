import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Arrendatario } from '../../models/Arrendatario';
import { ArrendatarioService } from '../../services/arrendatario.service';
import { Arrendador } from '../../models/Arrendador';
import { ArrendadorService } from '../../services/arrendador.service';

@Component({
  selector: 'app-crear-arrendatario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-arrendatario.component.html',
  styleUrls: ['./crear-arrendatario.component.css']
})
export class CrearArrendatarioComponent {
  arrendatario: Arrendador;

  constructor(
    private arrendatarioService: ArrendadorService,
  ) {
    this.arrendatario = new Arrendador();
    this.arrendatario.role = "ARRENDATARIO";
  }

  crearArrendatario() {
    this.arrendatarioService.crearArrendador(this.arrendatario).then(response => {
      window.location.href = "/";
    }, error => {
      console.error('Error: ', error);
    });
  }
}
