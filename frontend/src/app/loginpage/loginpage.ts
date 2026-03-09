import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './loginpage.html',
  styleUrls: ['./loginpage.css']
})
export class LoginpageComponent {

  userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    rememberMe: false
  };

  constructor(private authService: AuthService) {}

  onSubmit() {

    this.authService.register(this.userData).subscribe({
      next: (response: any) => {
        console.log('Backend response:', response);
        alert('User registered successfully!');
      },

      error: (error: any) => {
        console.error('Registration failed:', error);
        alert('Something went wrong');
      }
    });

  }

}