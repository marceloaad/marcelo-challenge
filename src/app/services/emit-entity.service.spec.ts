import { TestBed, inject } from '@angular/core/testing';
import { EmitEntityService } from './emit-entity.service';

describe('EmitEntityService', () => {
  let service: EmitEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmitEntityService
      ]
    });
    service = TestBed.inject(EmitEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('emitEntity() should emit data to entity$ Subject',
    inject([EmitEntityService], (emitEntityService) => {
      emitEntityService.entity$.subscribe((entity) => {
        expect(entity).toBe('PERSON');
      });
      emitEntityService.emitEntity('PERSON');
  }));
});
