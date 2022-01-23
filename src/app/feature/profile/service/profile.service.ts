import {Injectable} from '@angular/core';
import {MasterService} from "../../../@core/MasterService/masterService";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BaseApiService} from "../../../@core/MasterService/baseApiService";

@Injectable({
  providedIn: 'root'
})
export class ProfileService  extends BaseApiService<any> implements MasterService<any>{

  private static API = 'test/v1'

  constructor(private http: HttpClient) {
    super()
  }

  protected getApi(): string {
    return ProfileService.API;
  }

  getAll(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.getApi()}/test2`);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
