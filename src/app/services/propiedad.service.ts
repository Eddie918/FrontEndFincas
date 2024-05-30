// src/app/services/propiedad.service.ts

import { Injectable } from '@angular/core';
import { Propiedad } from '../models/Propiedad';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  private apiUrl = 'http://localhost:8080/propiedades';

  constructor() { }

  crearPropiedad(propiedad: Propiedad): Promise<Propiedad> {
    return axios.post<Propiedad>(this.apiUrl, propiedad).then(response => response.data);
  }

  listarPropiedades(): Promise<Propiedad[]> {
    return axios.get<Propiedad[]>(this.apiUrl).then(response => response.data);
  }

  getPropiedad(id: number): Promise<Propiedad> {
    const url = `${this.apiUrl}/${id}`;
    return axios.get<Propiedad>(url).then(response => response.data);
  }

  mejoresPropiedades(): Promise<Propiedad[]> {
    const url = `${this.apiUrl}/mejores`;
    return axios.get<Propiedad[]>(url).then(response => response.data);
  }

  getPropiedadesDisponibles(): Promise<Propiedad[]> {
    const url = `${this.apiUrl}/disponibles`;
    return axios.get<Propiedad[]>(url).then(response => response.data);
  }
}
