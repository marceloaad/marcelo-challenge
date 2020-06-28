import { Component, OnInit } from '@angular/core';
import { EntityService } from '../services/entity.service';
import { EmitEntityService } from '../services/emit-entity.service';

@Component({
  selector: 'app-entities-container',
  templateUrl: './entities-container.component.html',
  styleUrls: ['./entities-container.component.scss']
})
export class EntitiesContainerComponent implements OnInit {

  constructor(
    private _entityService: EntityService,
    private _emitEntity: EmitEntityService
  ) { }

  public entities = [];

  /**
   * Sends the entity selected to the Entity service
   * This is received by the text container component
   */
  sendEntity(entity) {
    this._emitEntity.emitEntity(entity);
  }

  ngOnInit(): void {
    this.entities = this._entityService.getEntities();
  }

}
