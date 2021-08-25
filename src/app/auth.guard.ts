import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private route: Router){}

  getData(key: string) {
    let x = localStorage.getItem(key);
    return x;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      
      let loginStatus=localStorage.getItem("IsLoggedIn")
      let role=localStorage.getItem("role")
      if(loginStatus=='true'&&role=="ADMIN"){
    return true;}
    // else if(loginStatus==null||loginStatus==undefined||loginStatus==""){
    //   alert("you are not authorized")
    //   this.route.navigate(['/login']);
    //   return false;
    // }
    else{
      alert("you are not authorized")
      this.route.navigate(['/login']);
      return false;
    }
    // return  true;
  }
  
}
