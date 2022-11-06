import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  registerUser(body:any):Observable<any>{
    return this.http.post(environment.domain+'api/register',body);
  }

  loginUser(body:any):Observable<any>{
    return this.http.post(environment.domain+'api/login',body);
  }

}
