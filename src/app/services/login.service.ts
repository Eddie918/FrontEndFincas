// src/app/services/login.service.ts

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl: string = 'http://localhost:8080/jwt/security/autenticar';
  private jwtHelper = new JwtHelperService();

  constructor() {}

  async autenticar(arrendador: any): Promise<any> {
    try {
      const response = await axios.post(this.apiUrl, arrendador);
      return response.data;
    } catch (error) {
      console.error('Error durante la autenticación', error);
      throw error;
    }
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token') !== null;
    }
    return false;
  }

  getRole(): string {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken.role;
    }
    return '';
  }

}
