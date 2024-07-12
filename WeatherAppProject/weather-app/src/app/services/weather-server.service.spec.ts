import { TestBed } from '@angular/core/testing';

import { WeatherServerService } from './weather-server.service';

describe('WeatherServerService', () => {
  let service: WeatherServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
