import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutenticacionService } from '../../autenticacion.service';

@Component({
  selector: 'app-inicio-de-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.css']
})
export class InicioDeSesionComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private autenticacionService: AutenticacionService) {
    this.loginForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.autenticacionService.login(this.loginForm.value).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        // Otros campos según tu lógica de autenticación

      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
