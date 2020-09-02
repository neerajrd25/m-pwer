import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_TOKEN } from 'src/app.constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = sessionStorage.getItem('usertoken'); // you probably want to store it in localStorage or something

        if (!token) {
            return next.handle(req);
        }

        const req1 = req.clone({
            headers: req.headers.set('apptoken', `${API_TOKEN}`).set('usertoken',sessionStorage.getItem('usertoken'))
            ,
        });

        return next.handle(req1);
    }

}