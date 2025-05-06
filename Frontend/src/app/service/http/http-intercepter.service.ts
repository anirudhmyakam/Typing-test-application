import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthservicesService } from '../authentication/authservices.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor{

  constructor(private auth : AuthservicesService) { }

  intercept(request:HttpRequest<any>, handler:HttpHandler){
    // console.log("in the http handler")
    let authtoken = this.auth.getAuthenticatedToken()
    const isPublic = request.url.endsWith('/register');

    if (authtoken && !isPublic){
      var auth_request=request.clone({
        setHeaders:{
          Authorization : authtoken
        }
      })
      return handler.handle(auth_request)
    }

    return handler.handle(request);
    
  }
}
