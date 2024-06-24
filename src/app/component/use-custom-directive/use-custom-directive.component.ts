import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-use-custom-directive',
  templateUrl: './use-custom-directive.component.html',
  styleUrls: ['./use-custom-directive.component.scss']
})
export class UseCustomDirectiveComponent {
  active: boolean = true;


  public form: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  name = '';

  getDebounceClick(event:any) {
    console.log('Click event', event)
  }

  getDebounceSubmit(event:any) {
    // console.log('Submit event', event)
    console.log('this.form.get(name)?.value', this.form.get('name')?.value)
    // console.log('this.form.controls[name].getRawValue()',this.form.controls['name'].getRawValue())
  }
}
