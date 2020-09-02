import { Injectable } from '@angular/core';
import { ApiService } from 'src/api.service';
import { API_TOKEN } from 'src/app.constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private api: ApiService) { }

  postTask(){
    let headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', '*');
    headers.append('apptoken',API_TOKEN);

    return this.api.get('task/list',headers)



  }

}
