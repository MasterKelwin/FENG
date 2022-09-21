import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FanRegisterService {

  private userData: any[];
  constructor() {
    this.userData = [];
   }

   get data(){
    return this.userData;
   }

   add(register: any) {
    register = {...register, date: new Date()};
    this.userData.push(register);
   }


}
