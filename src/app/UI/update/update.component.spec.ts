import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Task } from 'src/app/Models/task';
import { Observable, of } from 'rxjs';
import { TaskService } from 'src/app/Services/task.service';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,RouterTestingModule,HttpClientModule,MatSliderModule],
      declarations: [ UpdateComponent ],

      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .overrideComponent(UpdateComponent, {
      set: {
        providers: [{ provide: TaskService, useClass: MockTaskService }]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('task update test',()=>{
     component.updateTask() ;
     expect(component.Message).toEqual("Task updated successfully") ;
  });
});

class MockTaskService{
  updateTask(taskObj:Task):Observable<any>{
    return of("Task updated successfully");
  }
  getTaskById(Id:number):Observable<any>{
    return of({ TaskID: 100, TaskName: "Task1", ParentTaskName: "ParentTask1", Priority: 5, StartDate: new Date(2018, 1, 10), EndDate: new Date(2018, 8, 15) });
  }

}
