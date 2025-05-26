import { TestBed } from '@angular/core/testing';

import { GpsModuleService } from './gps-module.service';

describe('GpsModuleService', () => {
  let service: GpsModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpsModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
