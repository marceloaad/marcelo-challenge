import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitEntityService {

  private _entitySource = new Subject<String>();
  entity$ = this._entitySource.asObservable();

  constructor() { }

   /**
   * Emits the Entity observed
   */
  emitEntity(entity: string) {
    this._entitySource.next(entity);
  }
}
