/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';


//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

xdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //service dependancies must be placed in the imports
      imports: [HttpModule],
      declarations: [ TodosComponent ],

      //providers only work for integration testing 
      //it would not work for unit testing aproach
      providers:[TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should load todos from the server', () => {

    

    //if you want to user service on componenet level then
    //you must have to add the providers array in the componenet under 
    //test which is using that service
    //you need fixture to do that
    //fixture.debugElement.injector.get(TodoService)
    //or you can use testbed
    //this will work if you provide the service at module level as well as
    //at component level
    let service = TestBed.get(TodoService);
    spyOn(service,'getTodos').and.returnValue(Observable.from([[1,2,3]]));

    fixture.detectChanges();

    expect(component.todos.length).toBe(3);

  });
});
