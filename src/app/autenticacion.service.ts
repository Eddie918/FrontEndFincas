import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private apiUrl = 'http://localhost:8080/jwt/security/autenticar'; // URL base de tu API

  constructor(private http: HttpClient) { }

  login(credentials: { nombre: string; apellido: string; contrasena: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/autenticar`, credentials);
  }
}
