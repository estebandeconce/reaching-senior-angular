import { TestBed } from '@angular/core/testing';

import { WritersServicesService } from './writers-services.service';

describe('WritersServicesService', () => {
  let service: WritersServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WritersServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
