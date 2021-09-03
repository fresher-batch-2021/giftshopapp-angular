 
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
    const basicAuth = "Basic " + btoa(environment.dbUserName + ":" + environment.dbPassword);

    const url = environment.endpoint;
      
    request = request.clone({
        setHeaders: {
                Authorization: `${basicAuth}`
        }
    });
    return next.handle(request);
  }


}
