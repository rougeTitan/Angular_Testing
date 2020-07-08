/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { execPath } from 'process';
import { routes } from 'app/app.routes';

//creating fake server using stub
class RouterStub {
  navigate(params){
  }
}

class ActivatedRouterStub {
  private subject = new Subject();

  push(value){
    this.subject.next(value);
  }

  get params(){
    return this.subject.asObservable();
  }
 //params: Observable<any> = Observable.empty();
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers:[
        //initializing stubs
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouterStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should redirect the user to the user page after saving', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    component.save();
    expect(spy).toHaveBeenCalledWith(['user']);
  });

  it('should redirect the user to the not found when an invalid user is passed', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    //since you will the object type any for route you need to explicit about it
    let route:ActivatedRouterStub = TestBed.get(ActivatedRoute);
    //at this stage you need to modify your stub and add more properties to push the parms values
    route.push({
      id:0
    });
    
    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
