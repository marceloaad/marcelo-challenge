import { Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  Renderer2,
  Injector,
  ComponentFactoryResolver,
  ApplicationRef
} from '@angular/core';
import { TextService } from '../services/text.service';
import { EmitEntityService } from '../services/emit-entity.service';
import { DeselectService } from '../services/deselect.service';
import { SelectionContainerComponent } from '../selection-container/selection-container.component';

@Component({
  selector: 'app-texts-container',
  templateUrl: './texts-container.component.html',
  styleUrls: ['./texts-container.component.scss']
})
export class TextsContainerComponent implements OnInit, OnChanges {

  constructor(
    private _textService: TextService,
    private _emitEntityService: EmitEntityService,
    private _deselectService: DeselectService,
    private renderer: Renderer2,
    private injector: Injector,
    private cfr: ComponentFactoryResolver,
    private applicationRef: ApplicationRef
  ) { }

  public selectedText = {};
  public texts = [];
  public currentText = {text: '', source: '', doc_id: null};
  public currentEntity: string = 'PERSON';
  public changes: { range: Range; content: Node }[] = [];
  public activeSelection: boolean = false;
  public textContainer: Element;
  @Output()
  public sendSelectedText: EventEmitter<object> = new EventEmitter<object>();
  @Input()
  public textIndex: number;

  ngOnInit(): void {
    this.texts = this._textService.getTexts();
    this.textContainer = document.querySelector('div.texts-container');
    this.currentText = this.texts[0];
    this.textContainer.textContent = this.currentText.text;
    this._emitEntityService.entity$
      .subscribe(
        entity => {
          this.currentEntity = entity;
        }
      );
    this._deselectService.action$
      .subscribe(
        action => {
          if (action) {
            this.deselect();
          }
        }
      );
  }

  ngOnChanges(changes) {
    this.deselect();
    this.currentText = this.texts[this.textIndex];
    this.currentText ? this.textContainer.textContent = this.currentText.text : null;
  }
  /**
   * Gets the selection of the text container
   * Generates a wrapper whichs contains the text of the selection and also the current Entity
   */
  highlightSelection() {
    if (!this.activeSelection) {
      const caretPosition = window.getSelection().getRangeAt(0);
      const range = document.createRange();
      range.setStart(
        caretPosition.commonAncestorContainer,
        caretPosition.startOffset
      );
      range.setEnd(
        caretPosition.commonAncestorContainer,
        caretPosition.endOffset
      );
      this.selectedText = {
        docId: this.currentText.doc_id,
        entity: this.currentEntity,
        startOffset: range.startOffset,
        endOffset: range.endOffset
      };
      this.emitTextSelection();

      const wrap = this.renderer.createElement('wrapper-container');
      const factory = this.cfr.resolveComponentFactory<SelectionContainerComponent>(
        SelectionContainerComponent
      );
      const cmp = factory.create(this.injector, [], wrap);

      this.applicationRef.attachView(cmp.hostView);

      const contents = range.extractContents();
      cmp.instance.innerText = contents.textContent;
      cmp.instance.entity = this.currentEntity;
      this.changes.push({ range: range, content: contents.cloneNode(true) });

      range.insertNode(wrap);
      caretPosition.setStart(range.endContainer, range.endOffset);
      caretPosition.setEnd(caretPosition.endContainer, caretPosition.endOffset);
    }
  }
  /**
   * Restores de selection to the initial state of the text.
   */
  deselect() {
    if (this.activeSelection) {
      const action = this.changes.pop();
      const range = action.range;
      const node = range.extractContents();
      range.insertNode(action.content);
      this.activeSelection = false;
      this.selectedText = {};
      this.currentText ? this.textContainer.textContent = this.currentText.text : null;
    }
  }
  /**
   * Sends the selection as an object to the parent
   */
  emitTextSelection() {
    this.activeSelection = true;
    this.sendSelectedText.emit(this.selectedText);
  }
}
