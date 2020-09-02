import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Task } from '../_models/app.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  taskList: Task[] = [];
  parentId: number
  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.parentId = 357
    this.getTasks()
  }

  getTasks() {
    this.service.postTask(this.parentId).subscribe((data) => {
      this.taskList = data.data;
    })
  }

  trackById(index, obj) {
    return obj ? obj.id : undefined
  }

}
