import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/Models/task';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private sub: any;
  id: string;
  taskObj: Task = new Task();
  origTaskObj: Task = new Task();
  Message: string = "";
  constructor(private router: Router, private route: ActivatedRoute, private taskSvc: TaskService) { }

  ngOnInit() {
    this.initialize();
    //    
  }

  initialize() {
    this.sub = this.route.params.subscribe(params =>
      this.id = params["id"]);
    this.taskSvc.getTaskById(this.id).subscribe(r => this.taskObj = r);
    this.origTaskObj.TaskID = this.taskObj.TaskID;
    this.origTaskObj.TaskName = this.taskObj.TaskName;
    this.origTaskObj.ParentTaskName = this.taskObj.ParentTaskName;
    this.origTaskObj.Priority = this.taskObj.Priority;
    this.origTaskObj.StartDate = this.taskObj.StartDate;
    this.origTaskObj.EndDate = this.taskObj.EndDate;
    this.Message = "";

  }

  updateTask() {
    this.taskSvc.updateTask(this.taskObj).subscribe(r => this.Message = r);
    //this.router.navigate(['/View']);
  }

  cancelTask() {
    this.taskObj = this.origTaskObj;
    //this.taskSvc.updateTask(this.taskObj);
    //console.log(this.origTaskObj.task);
    //this.taskObj = this.taskSvc.getTaskById(this.id);
  }
}
