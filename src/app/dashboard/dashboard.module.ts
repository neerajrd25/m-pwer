import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { TaskPriorityPipe } from '../service/pipes/task-status.pipe';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [DashboardComponent, TaskPriorityPipe],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatSliderModule
  ],
  exports:[TaskPriorityPipe],
  providers:[TaskPriorityPipe]
})
export class DashboardModule { }
