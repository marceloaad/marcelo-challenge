import { TestBed } from '@angular/core/testing';

import { EntityService } from './entity.service';

describe('EntityService', () => {
  let service: EntityService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Entities Array should not be empty', () => {
    const entities = service.getEntities();
    expect(entities.length).toBeGreaterThan(0);
  });

  it('should get the lenght of the Entities array correctly (8)', () => {
    const entities = service.getEntities();
    expect(entities.length).toEqual(8);
  });

  it('should contains the entity PERSON', () => {
    const entities = service.getEntities();
    const sampleEntity: string = "PERSON";
    expect(entities).toContain(sampleEntity);
  });
});
