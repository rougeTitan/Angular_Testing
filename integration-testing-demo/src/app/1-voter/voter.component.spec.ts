import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing'
import {By} from '@angular/platform-browser'
describe('VoterComponent', () => {

  let componenet: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent]
    });
    // this will give us an instance of the componenet
    //which is wrapped inside the fixture so that we can get hold of
    //componenet as well as its template
    fixture = TestBed.createComponent(VoterComponent);
    componenet = fixture.componentInstance;
    //with this we can access all the dom elements by queriying
    //as well as you can get the injected dependancies
    fixture.debugElement

  });
 
  it('should render totla votes', () => {
    componenet.othersVote = 20;
    componenet.myVote = 1;
    //once you update the properties of the components dom element 
    //then you must have to call the change detection of angular explicitly
    fixture.detectChanges();
   
    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement= de.nativeElement;

    expect(el.innerText).toContain(21);
    //if you have directive instead 
    //fixture.debugElement.query(By.directive('componenetname'));

    expect
  });

  it('should highlight the upvote button if i have upvoted', () => {
    componenet.myVote = 1;
    fixture.detectChanges();
   
    let de = fixture.debugElement.query(By.css('glyphicon-menu-up'));
    expect(de.classes['highlighted']).toBeTruthy;
  });

  
  it('should incerese total votes when I click the upvote', () => {

    let button = fixture.debugElement.query(By.css('glyphicon-menu-up'));
    button.triggerEventHandler('click',null);
    expect(componenet.totalVotes).toBe(1);
  });


});
