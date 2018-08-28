import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponent } from './view.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { TaskService } from 'src/app/Services/task.service';
import { Task } from 'src/app/Models/task';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientModule],
      declarations: [ViewComponent]
    })
      .overrideComponent(ViewComponent, {
        set: {
          providers: [{ provide: TaskService, useClass: MockTaskService }]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('get count of all Tasks', () => {
    expect(component.getAllTasks().length).toEqual(3);
    
  });

  it('search functionality test',()=>{
    component.taskName="Task1";
    component.search();
    expect(component.getAllTasks().length).toEqual(1);
  })
  /// newFunction(component);
});

class MockTaskService {
  getAllTasks(): Observable<any> {
    return of(

      [{ TaskID: 100, TaskName: "Task1", ParentTaskName: "ParentTask1", Priority: 5, StartDate: new Date(2018, 1, 10), EndDate: new Date(2018, 8, 15) }
        , { TaskID: 101, TaskName: "Task2", ParentTaskName: "ParentTask2", Priority: 10, StartDate: new Date(2018, 1, 15), EndDate: new Date(2018, 8, 20) }
      ,{ TaskID: 101, TaskName: "Task3", ParentTaskName: "ParentTask3", Priority: 10, StartDate: new Date(2018, 1, 15), EndDate: new Date(2018, 8, 20) }]);
  }

  searchTask(query:string): Observable<any> {
    return of(
      [{ TaskID: 100, TaskName: "Task1", ParentTaskName: "ParentTask1", Priority: 5, StartDate: new Date(2018, 1, 10), EndDate: new Date(2018, 8, 15) }]
    );
  }
}



