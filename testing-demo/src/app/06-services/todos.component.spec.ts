import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/observable/from';
import { ECANCELED } from 'constants';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    //you dont need to pass actual httpclient since we are not going to
    //make an actual call anyway
    service = new TodoService(null);

    //injecting service to componenet
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from service', () => {
    
    let todos = [1,2,3];
    //passing service and its method
    //callfake will call the implimention that we provided for the actual
    //service method
    spyOn(service, "getTodos").and.callFake(()=>{
      return Observable.from([todos])
    });

    component.ngOnInit();

    expect(component.todos.length).toBe(todos);

  });

  it('should call the service when new data is getting added', () => {

    let todo ={id: 1};
    let spy = spyOn(service, "add").and.callFake(t =>{
      return Observable.from([todo]);
    });

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan;

  });

  it('should add the new todo returned from the server', () => {

    let spy = spyOn(service, "add").and.callFake(t =>{
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled;

  });

  it ( 'should call the server to delete a todo item if the user confirms', () => {

    spyOn(window,'confirm').and.returnValue(true);
    let spy = spyOn(service,'delete').and.returnValue(Observable.empty);

    component.delete(1);

    expect(spy).toHaveBeenCalled(1);
  })
});