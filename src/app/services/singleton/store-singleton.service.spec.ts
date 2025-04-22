import { TestBed } from '@angular/core/testing';

import { StoreSingletonService } from './store-singleton.service';

describe('StoreSingletonService', () => {
  let service: StoreSingletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreSingletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
