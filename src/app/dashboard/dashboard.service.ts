import { Injectable } from '@angular/core';
import { ApiService } from 'src/api.service';
import { API_TOKEN } from 'src/app.constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private api: ApiService) { }

  postTask(){


    return this.api.post('task/list')



  }

}
