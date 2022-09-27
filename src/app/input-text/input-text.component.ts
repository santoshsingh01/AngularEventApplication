import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input() propertyConfig: any;
  labelName:string="";

  valueFormGroup?: FormGroup;
  valueFormControl?: FormControl;
  constructor(private formGroupDirective: FormGroupDirective, 
    private formControlNameDirective: FormControlName) { }

  ngOnInit(): void {
    this.valueFormGroup = this.formGroupDirective.form;
    this.valueFormControl = this.formGroupDirective.getControl(this.formControlNameDirective);
    console.log(this.propertyConfig);
    if(this.propertyConfig.DisplayName != undefined)
    {
      this.labelName = this.propertyConfig.DisplayName;
    }
  }

  get controlName() {
    return this.formControlNameDirective.name;
  }

  get enabled() {
    if(this.propertyConfig.VisibleState == 1)
    {
      return this.valueFormControl?.enabled;
    }
    else
    {
      return this.valueFormControl?.disabled;

    }
  }

}
