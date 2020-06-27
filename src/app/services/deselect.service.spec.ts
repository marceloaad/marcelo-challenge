import { TestBed } from '@angular/core/testing';

import { DeselectService } from './deselect.service';

describe('DeselectService', () => {
  let service: DeselectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeselectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
