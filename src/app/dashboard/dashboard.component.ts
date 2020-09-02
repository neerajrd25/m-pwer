import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Task } from '../_models/app.model';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  taskList: Task[] = [];
  parentId: number
  constructor(private service: DashboardService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.parentId = 357
    this.getTasks()
  }

  getTasks() {
    this.service.postTask(this.parentId).subscribe((data) => {
      this.taskList = data.data;
      this.notificationService.success('Data fetched')

    })
  }

  trackById(index, obj) {
    return obj ? obj.id : undefined
  }

}
