import { Injectable } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { forEach } from '@angular/router/src/utils/collection';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { DateAdapter } from '@angular/material';

// const httpOptions = {
//   headers: new HttpHeaders({
//   'Content-Type':  'application/json'
//  })
// };

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiBaseUrl: string = "http://localhost/TaskManager.Service/api/";
  lstTask: Task[] = [];

  // { taskId: 100, task: "Task1", parentTask: "ParentTask1", priority: 5, startDt: new Date(2018, 1, 10), endDt: new Date(2018, 8, 15) },
  // { taskId: 101, task: "Task2", parentTask: "ParentTask2", priority: 10, startDt: new Date(2018, 8, 15), endDt: new Date(2018, 8, 20) },
  // { taskId: 102, task: "Task3", parentTask: "ParentTask3", priority: 15, startDt: new Date(2018, 8, 20), endDt: new Date(2018, 8, 22) },
  // { taskId: 103, task: "Task4", parentTask: "ParentTask4", priority: 20, startDt: new Date(2018, 8, 25), endDt: new Date(2018, 8, 31) },
  // { taskId: 104, task: "Task5", parentTask: "ParentTask5", priority: 25, startDt: new Date(2018, 8, 27), endDt: new Date(2018, 8, 30) },
  // { taskId: 105, task: "Task6", parentTask: "ParentTask6", priority: 27, startDt: new Date(2018, 8, 31), endDt: new Date(2018, 9, 10) }];
  constructor(private _http: HttpClient) {

  }

  getAllTasks(): Observable<any> {
    return this._http.get(this.apiBaseUrl + "getall").pipe(map(res => res));
  }

  getTaskById(Id): Observable<any> {
    return this._http.get(this.apiBaseUrl + "get/" + Id).pipe(map(res => res));
  }

  addTask(tObj: Task): Observable<any> {
    let maxValue = Math.max.apply(Math, this.lstTask.map(function (o) { return o.TaskID }));
    tObj.TaskID = maxValue + 1;

    return this._http.post(this.apiBaseUrl + "add", tObj).pipe(map(res => res));
  }

  updateTask(tObj: Task): Observable<any> {
    // let index = this.lstTask.findIndex(c => c.TaskID == tObj.TaskID);
    // this.lstTask[index] = tObj;
    return this._http.post(this.apiBaseUrl + "update", tObj).pipe(map(res => res));
  }

  searchTask(searchQueryString: string): Observable<any> {
    let url = this.apiBaseUrl + "search?" + searchQueryString;
    return this._http.get(url).pipe(map(res => res));
  }

}
