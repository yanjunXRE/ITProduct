import { TestBed } from '@angular/core/testing';

import { ItserviceService } from './itservice.service';

describe('ItserviceService', () => {
  let service: ItserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
