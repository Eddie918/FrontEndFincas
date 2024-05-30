import { Injectable } from '@angular/core';
import { Arrendador } from '../models/Arrendador';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/jwt/security/autenticar';

  constructor() { }

  async autenticar(arrendador: Arrendador): Promise<any> {
    try {
      const response = await axios.post(this.apiUrl, arrendador);
      return response.data;
    } catch (error) {
      console.error('Error durante la autenticación', error);
      throw error;
    }
  }
}
