import { Injectable } from '@angular/core';
import axios from 'axios';
import { Solicitud } from '../models/Solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private apiUrl: string = 'http://localhost:8080/solicitudes';

  constructor() {}

  async createSolicitud(solicitud: Solicitud): Promise<Solicitud> {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(this.apiUrl, solicitud, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al crear la solicitud', error);
      throw error;
    }
  }

  async getSolicitudes(): Promise<Solicitud[]> {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(this.apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener las solicitudes', error);
      throw error;
    }
  }

  async getSolicitudById(id: number): Promise<Solicitud> {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${this.apiUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener la solicitud', error);
      throw error;
    }
  }

  async updateSolicitud(solicitud: Solicitud): Promise<Solicitud> {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(this.apiUrl, solicitud, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la solicitud', error);
      throw error;
    }
  }

  async deleteSolicitud(id: number): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${this.apiUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error('Error al eliminar la solicitud', error);
      throw error;
    }
  }
}
