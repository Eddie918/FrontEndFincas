import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitud-confirmacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitud-confirmacion.component.html',
  styleUrls: ['./solicitud-confirmacion.component.css']
})
export class SolicitudConfirmacionComponent implements OnInit {
  propiedad: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.propiedad = {
        id: params['id'],
        precio: params['precio'],
        ubicacion: params['ubicacion'],
        disponibilidad: params['disponibilidad'],
        descripcion: params['descripcion']
      };
    });
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
