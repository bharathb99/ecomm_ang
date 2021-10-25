import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "http://localhost:3000/userDetails";

  constructor(private http: HttpClient) { }

  loginUser(user: any){
    return this.http.post<any>(this._loginUrl,user)
  }
}

