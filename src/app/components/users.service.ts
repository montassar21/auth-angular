import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Users } from '../users.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string ="http://127.0.0.1:5000/";

  constructor(private httpClient: HttpClient) { }

  public signUp(userObj:any){
    return this.httpClient.post<any>(`${this.baseUrl}Users`,userObj);
  }
  public login(loginObj:any){
    return this.httpClient.post<any>(`${this.baseUrl}UsersLogin`,loginObj);
  }
}
