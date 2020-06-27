import { TestBed } from '@angular/core/testing';

import { EmitEntityService } from './emit-entity.service';

describe('EmitEntityService', () => {
  let service: EmitEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
