import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  userRole: string | null;

  constructor(private loginService: LoginService) {
    if(this.loginService.isLoggedIn()){
      this.userRole = this.loginService.getRole();
    }
    this.userRole = null;
    
    
  }
}
