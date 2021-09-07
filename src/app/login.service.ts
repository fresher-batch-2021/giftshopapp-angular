import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private restService:RestService) { }
  login(email:string,password:string){
    return this.restService.login(email,password);
  }
}
