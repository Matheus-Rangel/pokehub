import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject, Observable, from} from 'rxjs';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:3000/login';
  private isAuthenticated = false;
  constructor(private http: HttpClient) {}
  authenticate(user: User): void{
    this.http.post(this.authUrl, user).subscribe(value => this.isAuthenticated = true);
  }
}
