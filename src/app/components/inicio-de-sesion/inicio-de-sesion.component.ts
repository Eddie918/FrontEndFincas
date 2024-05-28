import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AxiosService } from '../../axios.service';

@Component({
  selector: 'app-inicio-de-sesion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.css']
})
export class InicioDeSesionComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private axiosService: AxiosService) {
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
    this.axiosService.request('post', '/autenticar', this.loginForm.value)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('auth_token', token);
        // Otros campos según tu lógica de autenticación
      })
      .catch(error => {
        console.error(error);
      });
  }
}
