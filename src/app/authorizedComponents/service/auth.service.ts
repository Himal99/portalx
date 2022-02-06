import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static API='http://localhost:8082/v1/login'

  constructor(private httpClient: HttpClient) { }

  public login(body: any): Observable<any>{
    const api = AuthService.API;
    return this.httpClient.post(api, body);
  }

  public signUp(body: any): Observable<any>{
    const api = 'http://localhost:8082/v1/users'
    return this.httpClient.post(api, body);
  }

}
