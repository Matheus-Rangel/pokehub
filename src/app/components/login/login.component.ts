import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/authapi/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent{
  isLoading = false;
  constructor( private router: Router, private authService: AuthService) {}

  login(form: NgForm): void {
    console.log({username: form.value.username, password: form.value.password});
    const authStateUpdate = this.authService.login({username: form.controls.username.value, password: form.controls.password.value});
    this.isLoading = true;
    authStateUpdate.subscribe(() => {
      this.isLoading = false;
      this.authService.setUsername(form.value.username);
    }, () => {
      this.isLoading = false;
      form.controls.username.setErrors({incorrect: true});
      form.controls.password.setErrors({incorrect: true});
    });
  }
}
