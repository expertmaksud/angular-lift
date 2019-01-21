import { TestBed } from '@angular/core/testing';

import { ScreenerResourceService } from './screener-resource.service';

describe('ScreenerResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenerResourceService = TestBed.get(ScreenerResourceService);
    expect(service).toBeTruthy();
  });
});
