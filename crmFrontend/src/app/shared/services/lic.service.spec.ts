import { TestBed } from '@angular/core/testing';

import { LicService } from './lic.service';

describe('LicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicService = TestBed.get(LicService);
    expect(service).toBeTruthy();
  });
});
