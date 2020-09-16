import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject, Observable, from} from 'rxjs';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:3000/';
  private usernameSubject = new Subject<string>();
  private username: string;
  constructor(private http: HttpClient) {}
  login(user: User): Observable<any>{
    return this.http.post(this.authUrl + 'login', user);
  }
  setUsername(username: string): void{
    this.username = username;
    this.usernameSubject.next(username);
  }
  signup(user: User): Observable<any>{
    return this.http.post(this.authUrl + 'signup', user);
  }
  getUsername(): string{
    return this.username;
  }
  getUsernameObservable(): Observable<string>{
    return this.usernameSubject.asObservable();
  }
}
