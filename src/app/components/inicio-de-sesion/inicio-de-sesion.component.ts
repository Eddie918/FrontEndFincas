import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AxiosService } from '../../axios.service';
import { Router } from '@angular/router';
import { Arrendador } from '../../models/Arrendador';
import { LoginService } from '../../services/login.service';

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
  arrendador: Arrendador;

  constructor(
    private formBuilder: FormBuilder,
    private axiosService: AxiosService,
    private loginService: LoginService,
    private router: Router // Inyecta el servicio de router para redirección
  ) {
    this.arrendador = new Arrendador();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    if (this.loginForm.invalid) {
      return;
    }

    try {
      const result = await this.loginService.autenticar(this.arrendador);
      console.log('Token:', result.token);
      // Almacenar el token y redirigir a otra página si es necesario
      localStorage.setItem('token', result.token);
      this.router.navigate(['/']); // Cambia '/ruta-a-donde-redirigir' por la ruta a la que quieres redirigir
    } catch (error) {
      console.error('Error durante la autenticación', error);
      this.errorMessage = 'Credenciales incorrectas';
    }
  }
}
