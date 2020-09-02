import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks(){
    this.service.postTask().subscribe((data)=>{
      console.log(data);
    })
  }

}
