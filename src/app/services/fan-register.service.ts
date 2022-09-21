import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FanRegisterService {

  private userData: any[];
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

   add(register: any) {
    register = {...register, date: new Date()};
    this.userData.push(register);
   }


}
