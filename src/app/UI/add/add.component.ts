import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { Task } from 'src/app/Models/task';
import { TaskService } from 'src/app/Services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  taskObj: Task = new Task();
  Message:string="";
  constructor(private _taskService:TaskService, private _router:Router) {
    this.initialize();
  }

  ngOnInit() {

  }

  initialize(){
    this.taskObj.Priority = 0;
    this.taskObj.TaskName ="";
    this.taskObj.ParentTaskName = "";
    this.taskObj.StartDate =  null;
    this.taskObj.EndDate = null;
    this.Message="";
  }
  addTask(){

   this._taskService.addTask(this.taskObj).subscribe(
     r=> this.Message= r);  
  
   //this._router.navigate(['/View']);
  }

}
