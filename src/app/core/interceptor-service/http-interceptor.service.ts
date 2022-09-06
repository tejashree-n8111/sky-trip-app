import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/features/comp/login/service/login.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //let user = localStorage.getItem('loggedInUser') || '';
    let user = this.loginService.user;

    const modifiedReq = req.clone({
      setHeaders: { 'loggedInUser': user }
    })

    return (next.handle(modifiedReq))
  }
}


