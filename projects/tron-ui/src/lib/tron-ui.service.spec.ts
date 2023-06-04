import { TestBed } from '@angular/core/testing';

import { TronUiService } from './tron-ui.service';

describe('TronUiService', () => {
  let service: TronUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TronUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
