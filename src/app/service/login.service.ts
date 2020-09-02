import { Injectable } from '@angular/core';
import { ApiService } from 'src/api.service';
import { of } from 'rxjs';
import { API_TOKEN } from 'src/app.constants';
import { Login } from '../_models/login.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiService) { }


  doLogin(login:Login){
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    
    
    
    
    
    const options = { headers: headers};
    // const formData = new FormData();
    // formData.append('email',login.email)
    // formData.append('password',login.password)
    // formData.append('id_type',login.id_type)
    // formData.append('tenantid',String(login.tenantid))
    let body = `email=${login.email}&password=${login.password}&tenantid=${login.tenantid}&id_type=${login.id_type}`;
    return this.api.post('login/password',body, options )


  }
}
