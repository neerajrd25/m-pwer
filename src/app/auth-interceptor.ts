import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_TOKEN } from 'src/app.constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            headers: req.headers.set('apptoken', `${API_TOKEN}`)

        });

        if (!req.url.includes('password')) {
            const token = sessionStorage.getItem('usertoken'); // you probably want to store it in localStorage or something
            const req1 = req.clone({
                headers: req.headers.set('usertoken', token)
                ,
            });
            return next.handle(req1);

        }
        return next.handle(req);

    }

}