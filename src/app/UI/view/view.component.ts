import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [DatePipe]
})
export class ViewComponent implements OnInit {

  lstTask: Task[] ;
  lstTask1: Task[] = [];
  lstAllTask: Task[] = [];
  taskName: string = "";
  parentTaskName: string = "";
  priFrom: number = null;
  priTo: number = null;
  dtFrom: string;
  dtTo: string;
  constructor(private router: Router, private _taskSvc: TaskService) {

    this._taskSvc.getAllTasks().subscribe(res => this.lstTask = res);
    //  this.lstAllTask = this.lstTask;
  }

  ngOnInit() {
    this.lstTask1 = this.lstTask;
  }
  
  getAllTasks(): Task[]{
    return this.lstTask;
  }

  onClick(Id) {
    this.router.navigate(['/Update', Id]);
  }

  search() {
 let searchQuery="";
    this.lstTask1 = this.lstAllTask;
    if (this.taskName.length > 0) {
      //this.lstTask1 = this.lstTask1.filter(c => c.TaskName.toUpperCase().includes(this.taskName.toUpperCase()));
     searchQuery+="n="+this.taskName+"&";
    }
    if (this.parentTaskName.length > 0) {
     // this.lstTask1 = this.lstTask1.filter(c => c.ParentTaskName.toUpperCase().includes(this.parentTaskName.toUpperCase()));
     searchQuery+="pn="+this.parentTaskName+"&";
    }

    if (this.priFrom != null && this.priFrom > 0) {
      //this.lstTask1 = this.lstTask1.filter(c => c.Priority >= this.priFrom);
      searchQuery+="pf="+this.priFrom+"&";
    }
    if (this.priTo != null && this.priTo > 0) {
     // this.lstTask1 = this.lstTask1.filter(c => c.Priority <= this.priTo);
     searchQuery+="pt="+this.priTo+"&";
    }
    if (this.dtFrom != null && this.dtFrom.length > 0) {
      //this.lstTask1 = this.lstTask1.filter(c => (c.StartDate) >= new Date(this.dtFrom));
      searchQuery+="df="+this.dtFrom+"&";
    }
    if (this.dtTo != null && this.dtTo.length > 0) {
      //this.lstTask1 = this.lstTask1.filter(c => c.EndDate <= new Date(this.dtTo));
      searchQuery+="dt="+this.dtTo+"&";
    }
    searchQuery= searchQuery.substring(0,searchQuery.length-1);
    //console.log(searchQuery);
    this._taskSvc.searchTask(searchQuery).subscribe(r=>this.lstTask=r);
  }
}
