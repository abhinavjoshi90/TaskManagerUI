import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Task } from 'src/app/Models/task';
import { Observable, of } from 'rxjs';
import { TaskService } from 'src/app/Services/task.service';


describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,RouterTestingModule,HttpClientModule,MatSliderModule],
      declarations: [ AddComponent],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .overrideComponent(AddComponent,{
      set: {
        providers: [{ provide: TaskService, useClass: MockTaskService }]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('add task test',()=>{
    component.addTask();
    expect(component.Message).toEqual("Task added successfully");

  })
});

class MockTaskService{
  addTask(taskObj:Task):Observable<any>{
    return of("Task added successfully");
  }
}