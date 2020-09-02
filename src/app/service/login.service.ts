import { Injectable } from '@angular/core';
import { ApiService } from 'src/api.service';
import { of } from 'rxjs';
import { API_TOKEN } from 'src/app.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiService) { }


  doLogin(login){
    let headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', '*');
    headers.append('apptoken',API_TOKEN);
    headers.append('Content-Type','application/x-form-urlencoded')
    return this.api.post('login/password',login, headers )


  }
}
