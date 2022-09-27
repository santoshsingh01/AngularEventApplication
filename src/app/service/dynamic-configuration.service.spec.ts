import { TestBed } from '@angular/core/testing';

import { DynamicConfigurationService } from './dynamic-configuration.service';

describe('DynamicConfigurationService', () => {
  let service: DynamicConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
