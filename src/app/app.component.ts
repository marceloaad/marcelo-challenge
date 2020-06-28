import { Component, OnInit } from '@angular/core';
import { TextService } from './services/text.service';
import { AnnotationService } from './services/annotation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'MarceloChallengue';
  public textsLength: number = 0;
  public textSelection: object = null;
  public currentTextIndex: number = 0;
  public postingAnnotation: boolean = false;

  constructor(
    private _textService: TextService,
    private _annotationService: AnnotationService
  ) { }

  ngOnInit(): void {
    this.textsLength = this._textService.getTexts().length;
  }
  /**
   * Sends a JSON Object wich contains the data of the text selected to the Annotation Service.
   */
  postAnnotation() {
    if (this.textSelection !== null) {
      this.postingAnnotation = true;
      this._annotationService.postAnnotation(this.textSelection);
      this.textSelection = null;
      setTimeout(() => this.postingAnnotation = false,500);
    }
  }
  /**
   * Moves forward to the next text included in the array of the Text Service.
   */
  nextTextIndex() {
    if (this.currentTextIndex < this.textsLength -1) {
      this.currentTextIndex += 1;
    }
  }
  /**
   * Moves back to the next text included in the array of the Text Service.
   */
  previousTextIndex() {
    if (this.currentTextIndex > 0) {
      this.currentTextIndex -= 1;
    }
  }
}
