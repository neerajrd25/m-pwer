import { Injectable } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Observable } from 'rxjs';
import { Task, AppResponse } from '../_models/app.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private api: ApiService) { }

  postTask(parentId: number): Observable<AppResponse<Task>> {
    const fomrData = new FormData();
    fomrData.append('parent_id', String(parentId));

    return this.api.post('task/list',fomrData)
  }

}
