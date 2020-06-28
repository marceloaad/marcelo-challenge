import { TestBed, inject } from '@angular/core/testing';

import { DeselectService } from './deselect.service';

describe('DeselectService', () => {
  let service: DeselectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DeselectService
      ]
    });
    service = TestBed.inject(DeselectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('emitAction() should emit data to action$ Subject',
    inject([DeselectService], (deselectService) => {
      deselectService.action$.subscribe((action) => {
        expect(action).toBe(true);
      })
      deselectService.emitAction(true);
  }));
  
});

