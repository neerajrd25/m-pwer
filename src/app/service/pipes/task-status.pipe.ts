import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/_models/app.model';

@Pipe({
    name: 'taskPriorityPipe'
})
@Injectable()
export class TaskPriorityPipe implements PipeTransform {
    transform(tasks: Task[], priority: string): any {
        console.log(tasks)
        return tasks.filter(task => task.attr.priority ===  priority);
    }
}