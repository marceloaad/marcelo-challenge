import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor() { }

  /**
   * Simulates the getter of Entities
   * @returns Array
   */
  getEntities() {
    return [
      'ORG', 'PRODUCT', 'DATE', 'GPE', 'EVENT', 'TIME', 'LOC', 'PERSON'
    ];
  }
}
