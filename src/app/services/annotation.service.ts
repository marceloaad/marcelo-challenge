import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnotationService {

  private annotationData: JSON[];
  private observableAnnotations: BehaviorSubject<Array<JSON>>;

  constructor() {
    this.annotationData = new Array<JSON>();
    this.observableAnnotations = <BehaviorSubject<Array<JSON>>>new BehaviorSubject([]);
  }
 
  /**
   * Simulates the getter of Annotations
   * @returns JSON
   */
  getAnnotations(): Observable<JSON[]> {
    return this.observableAnnotations.asObservable();
  }

  /**
   * Pushs the new annotation data into the annotationData Array
   * Simulates the posting method to a serve (console.log)
   */
  postAnnotation(newAnnotation: JSON): void {
    this.annotationData.push(newAnnotation)
    this.observableAnnotations.next(Object.assign({}, this.annotationData));
    console.log("Annotation Data",this.annotationData);
  }
}
