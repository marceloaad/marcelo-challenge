import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeselectService {

  private _actionSource = new Subject<boolean>();
  action$ = this._actionSource.asObservable();

  constructor() { }
  /**
   * Emits the action observed
   */
  emitAction(action: boolean) {
    this._actionSource.next(action);
  }
}
