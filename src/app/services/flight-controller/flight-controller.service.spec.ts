import { TestBed } from '@angular/core/testing';

import { FlightControllerService } from './flight-controller.service';

describe('FlightControllerService', () => {
  let service: FlightControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
