import {CarePropertyConfiguration} from "./carePropertyConfiguration";

export class ConfigurationResponse {
    RootModelName: string;
    Configurations: Configurations[];
    HashValue: string | null;
    
    constructor(rootModelName:string,configurations:Configurations[],hashValue:string)
    {
        this.Configurations = configurations,
        this.HashValue = hashValue,
        this.RootModelName= rootModelName;
    }
}

export interface Configurations {
    key:string,
    CarePropertiesConfiguration:CarePropertyConfiguration
}