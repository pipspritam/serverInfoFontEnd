import { TestBed } from '@angular/core/testing';

import { ServerServicesService } from './server-services.service';

describe('ServerServicesService', () => {
  let service: ServerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
