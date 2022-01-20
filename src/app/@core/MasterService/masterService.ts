import {Observable} from "rxjs";

export interface MasterService<T>{
  getAll():Observable<T>;
  getById(id:number): Observable<T>;

}
