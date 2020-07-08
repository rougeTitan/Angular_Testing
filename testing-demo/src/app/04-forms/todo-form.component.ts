
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export class TodoFormComponent { 
  
  //form builder object
  form: FormGroup; 

  //initialization
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: [''],
    });
  }
}