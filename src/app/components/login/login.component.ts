import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent{
  isLoading = false;
  constructor( private router: Router) {}

  login(form: NgForm): void {
    console.log({username: form.value.username, password: form.value.password});
    // const authStateUpdate = this.rglyService.authenticate(form.controls.username.value, form.controls.password.value);
    // this.isLoading = true;
    // authStateUpdate.subscribe(value => {
    //   this.isLoading = false;
    //   if (value.authFailed){
    //     form.controls.username.setErrors({incorrect: true});
    //     form.controls.password.setErrors({incorrect: true});
    //   }
    //   if (value.isAuthenticated){
    //     this.router.navigate(['management']);
    //   }
    // });
  }
}
