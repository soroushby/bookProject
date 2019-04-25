import { TestBed } from '@angular/core/testing';

import { AddbooksService } from './addbooks.service';

describe('AddbooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddbooksService = TestBed.get(AddbooksService);
    expect(service).toBeTruthy();
  });
});
