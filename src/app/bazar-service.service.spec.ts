import { TestBed } from '@angular/core/testing';

import { BazarServiceService } from './bazar-service.service';

describe('BazarServiceService', () => {
  let service: BazarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BazarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
