import { TestBed } from '@angular/core/testing';
import { AnnotationService } from './annotation.service';

describe('AnnotationService', () => {
  let service: AnnotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Annotation Array should be empty', () => {
    const annotations = service.getAnnotations();
    expect(annotations.length).toEqual(0);
  });

  it('Annotations Array should not be empty after postAnnotation()', () => {
    const selection: object = {docId: 0, entity: 'PERSON', startOffset: 0, endOffset: 10};
    service.postAnnotation(selection);
    const annotations = service.getAnnotations();
    expect(annotations.length).toEqual(1);
  });
});
