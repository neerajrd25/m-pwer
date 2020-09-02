import { Injectable } from '@angular/core';
import { ApiService } from 'src/api.service';
import { of } from 'rxjs';
import { API_TOKEN } from 'src/app.constants';
import { Login } from '../_models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiService) { }


  doLogin(login:Login){
    let headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', '*');
    headers.append('apptoken',API_TOKEN);
    headers.append('Content-Type','application/x-form-urlencoded')
    let body = `email=${login.email}&password=${login.password}&tenantid=${login.tenantid}&id_type=${login.id_type}`;
    return this.api.post('login/password',body, headers )


  }
}
