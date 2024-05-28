import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AutenticacionService } from '../../autenticacion.service';

@Component({
  selector: 'app-inicio-de-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './inicio-de-sesion.component.html',
  styleUrl: './inicio-de-sesion.component.css'
})
export class InicioDeSesionComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private autenticacionService: AutenticacionService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.autenticacionService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
