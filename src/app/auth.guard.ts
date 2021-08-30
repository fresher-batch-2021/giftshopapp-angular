import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private route: Router){}

  getData(key: string) {
    let value = localStorage.getItem(key);
    value=value!=null?JSON.parse(value):console.log(key,'localstorage is empty');
    return value;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      
      let loginStatus=localStorage.getItem("IsLoggedIn")
      let role=localStorage.getItem("role")
      if(loginStatus=='true'&&role=="ADMIN"){
    return true;}
    
    else{
      alert("you are not authorized")
      this.route.navigate(['/login']);
      return false;
    }
      }
  
}
