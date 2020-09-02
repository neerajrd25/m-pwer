import { Injectable } from '@angular/core';
import { ApiService } from 'src/api.service';

import { HttpHeaders } from '@angular/common/http';
import { Login } from '../_models/app.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiService) { }
  doLogin(login:Login){
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    
    const options = { headers: headers};

    let body = `email=${login.email}&password=${login.password}&tenantid=${login.tenantid}&id_type=${login.id_type}`;
    return this.api.post('login/password',body, options )


  }
}
