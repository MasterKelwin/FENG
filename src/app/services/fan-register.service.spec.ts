import { TestBed } from '@angular/core/testing';

import { FanRegisterService } from './fan-register.service';

describe('FanRegisterService', () => {
  let service: FanRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FanRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
