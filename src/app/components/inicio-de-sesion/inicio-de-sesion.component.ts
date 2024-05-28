import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AxiosService } from '../../axios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-de-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.css']
})
export class InicioDeSesionComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private axiosService: AxiosService,
    private router: Router // Inyecta el servicio de router para redirección
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const loginData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.axiosService.request('post', '/jwt/security/autenticar', loginData) // Asegúrate de que la URL coincida con tu backend
      .then(response => {
        const token = response.data.token;
        this.axiosService.setAuthToken(token);
        // Redirecciona o realiza cualquier otra acción según tu lógica de autenticación
        this.router.navigate(['/dashboard']); // Ejemplo de redirección
      })
      .catch(error => {
        console.error(error);
        if (error.response && error.response.status === 403) {
          this.errorMessage = "Credenciales incorrectas. Por favor, inténtelo de nuevo.";
        } else {
          this.errorMessage = "Se produjo un error. Por favor, inténtelo de nuevo más tarde.";
        }
      });
  }
}
