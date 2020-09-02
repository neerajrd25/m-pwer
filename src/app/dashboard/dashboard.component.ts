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
  criticalCount: number;

  doneCount: number;

  currentDate : Date;

  constructor(private service: DashboardService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.parentId = 357
    this.getTasks()

    this.currentDate = new Date('2019-06-05')
  }

  getTasks() {
    this.service.postTask(this.parentId).subscribe((data) => {
      this.taskList = data.data;
      this.notificationService.success('Data fetched')
      this.criticalCount = this.taskList.filter(obj => obj.attr.priority === 'High').length;
      this.doneCount = this.taskList.filter(obj => obj.status === 'Done').length;
    })
  }

  trackById(index, obj) {
    return obj ? obj.id : undefined
  }

}
