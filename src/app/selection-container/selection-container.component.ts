import { Component, Output, EventEmitter } from '@angular/core';
import { DeselectService } from '../services/deselect.service';

@Component({
  selector: 'app-selection-container',
  templateUrl: './selection-container.component.html',
  styleUrls: ['./selection-container.component.scss']
})
export class SelectionContainerComponent{

  constructor(private _deselect: DeselectService) { }

  public innerText: string;
  public entity: String;

  @Output() 
  public removeSelection = new EventEmitter<boolean>();

  /**
   * Emits the action to restore the text
   */
  deselectText(): void {
    this._deselect.emitAction(true);
  }

}
