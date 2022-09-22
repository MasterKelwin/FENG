import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fan } from '../models/fans.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FanRegisterService {

  private userData: Fan[];
  private url = 'http://localhost:3000/fans';

  constructor(private httpClient: HttpClient) {
    this.userData = [];
   }

   catchData() {
    return this.httpClient.get(this.url);
   }

   get data(){
    return this.userData;
   }

   add(register: Fan): Observable<Fan> {
    register = {...register, date: new Date()};
    this.userData.push(register);

    //
    return this.httpClient.post<Fan>(this.url, register)
   }
}
