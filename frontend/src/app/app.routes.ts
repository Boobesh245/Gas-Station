import { Routes } from '@angular/router';
import { Home } from './home/home';
 
import { LoginpageComponent } from './loginpage/loginpage'; 

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'login',
     
    component: LoginpageComponent 
  }
];