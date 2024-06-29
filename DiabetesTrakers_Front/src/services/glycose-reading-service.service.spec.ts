import { TestBed } from '@angular/core/testing';

import { GlycoseReadingServiceService } from './glycose-reading-service.service';

describe('GlycoseReadingServiceService', () => {
  let service: GlycoseReadingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlycoseReadingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
