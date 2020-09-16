import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './services/authapi/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'pokehub';
  username: string;
  usernameSubscription: Subscription;
  constructor(private authService: AuthService) {
  }
  ngOnInit(): void {
    this.usernameSubscription = this.authService.getUsernameObservable().subscribe(value => this.username = value);
  }

  ngOnDestroy(): void {
    this.usernameSubscription.unsubscribe();
  }
}
