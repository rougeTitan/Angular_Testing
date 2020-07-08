/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component, Directive } from '@angular/core'; 

@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent { 
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges(); 
  });

  it('should higlight with cyan',()=>{
   let de = fixture.debugElement.queryAll(By.css('p'))[0];
    expect(de.nativeElement.style.backgroudColor).toBe('cyan');
  })

  it('should higlight second element with yellow',()=>{
    let de = fixture.debugElement.queryAll(By.css('p'))[1];
    de.injector.get(HighlightDirective);
     expect(de.nativeElement.style.backgroudColor).toBe(Directive.defaultColor);
   })
});
