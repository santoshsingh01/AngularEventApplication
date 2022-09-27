import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicConfigurationService } from '../service/dynamic-configuration.service';
import { ConfigurationResponse } from '../models/configurationResponse';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  lastNameLabel: string = "Last Name";
  configurationResponse: ConfigurationResponse | undefined;
  lastNamePropertyConfig:any;
  streetPropertyConfig: any;
  constructor(private fb: FormBuilder, private configureService: DynamicConfigurationService) { }

  myFormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    street: ['']
  });

  ngOnInit(): void {
    this.configurationResponse = this.configureService.getFieldConfiguration() as ConfigurationResponse;
    console.log(this.configurationResponse);
    for (const field in this.myFormGroup.controls) {
      const control = this.myFormGroup.get(field);
      for (let key in this.configurationResponse.Configurations) {
        if (key == this.configurationResponse.RootModelName + "." + field) {
          let propertyConfig: any = this.configurationResponse.Configurations[key];
          
          
          if (propertyConfig.Required) {
            console.log('Required true');
            this.myFormGroup.get(field)?.addValidators(Validators.required);
            this.myFormGroup.updateValueAndValidity();
          }
          //minLength validator
          if(propertyConfig.MinLength){
            this.myFormGroup.get(field)?.addValidators(Validators.minLength(propertyConfig.MinLength));
            this.myFormGroup.updateValueAndValidity();
          }
          //maxLength validator
          if(propertyConfig.MaxLength){
            this.myFormGroup.get(field)?.addValidators(Validators.maxLength(propertyConfig.MaxLength));
            this.myFormGroup.updateValueAndValidity();
          }
          
          if(key == 'ClientDetailsForm.lastName' ){
            this.lastNamePropertyConfig = propertyConfig;
            console.log(this.lastNamePropertyConfig);
          }
          
          if(key == 'ClientDetailsForm.street' ){
            this.streetPropertyConfig = propertyConfig;
            console.log(this.streetPropertyConfig);
          }

        }
      }
    }
  }

  OnSubmit() {
    console.log(this.myFormGroup!.value);

  }

}
