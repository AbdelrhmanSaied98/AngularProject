import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  login(user:User):Observable<any> {
   return this.httpClient.post<any>(environment.baseUrl+'user/login',user);
  }
}


interface User {
  email:string;
  password:string;
}