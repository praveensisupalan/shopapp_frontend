import { TestBed } from '@angular/core/testing';

import { ShopAppService } from './shop-app.service';

describe('ShopAppService', () => {
  let service: ShopAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
