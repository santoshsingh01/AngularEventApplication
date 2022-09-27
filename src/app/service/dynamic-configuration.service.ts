import { Injectable } from '@angular/core';
import { ConfigurationResponse } from '../models/configurationResponse';
import data from '../../assets/dynamicData.json'
@Injectable({
  providedIn: 'root'
})
export class DynamicConfigurationService {
  configuraitonData: any = JSON.stringify(data);
  constructor() { }

  getFieldConfiguration(): ConfigurationResponse {
    let configurationData: ConfigurationResponse = JSON.parse(this.configuraitonData);
    return configurationData;
  }
}
