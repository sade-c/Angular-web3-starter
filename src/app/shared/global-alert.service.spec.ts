import { TestBed } from '@angular/core/testing';

import { GlobalAlertService } from './global-alert.service';

describe('GlobalAlertService', () => {
  let service: GlobalAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
