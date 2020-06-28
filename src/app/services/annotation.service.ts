import { Injectable } from '@angular/core';
import { Document } from '../interfaces/document';
import { Annotation } from '../interfaces/annotation';

@Injectable({
  providedIn: 'root'
})
export class AnnotationService {

  private annotationsData: object[];

  constructor() {
    this.annotationsData = new Array<object>();
  }

  /**
   * Builds an Annotation (Annotation Interface)
   * @param selection - object {entity: string, startOffset: number, endOffset: number}
   * @returns Annotation
   */
  buildAnnotation(selection: any): Annotation {
    const annotationFormated: Annotation = {
      type: selection.entity,
      offset: {
        start_char: selection.startOffset,
        end_char: selection.endOffset
      }
    };
    return annotationFormated;
  }

  /**
   * Builds a Document (Document Interface)
   * @param docId - number
   * @returns Document
   */
  buildDocument(docId: number): Document{
    const document: Document = {
      doc_id : docId,
      annotations : []
    };
    return document;
  }

  /**
   * Simulates the getter of Annotations
   * @returns JSON
   */
  getAnnotations(): object[] {
    return this.annotationsData;
  }

  /**
   * Pushs the new annotation data into the annotationsData Documents Array
   * Simulates POST data with console log
   * @param textSelection - object {docId: number, entity: string, range: range}
   */
  postAnnotation(textSelection: object): void {
    let document: any;
    const annotation: Annotation = this.buildAnnotation(textSelection);
    if (this.annotationsData.some(doc => doc['doc_id'] === textSelection['docId'])) {
      document = this.annotationsData.find( doc => doc['doc_id'] === textSelection['docId']);
    } else {
      document = this.buildDocument(textSelection['docId']);
      this.annotationsData.push(document);
    }
    document.annotations.push(annotation);
    console.log('Annotation Data', this.annotationsData);
  }
}
