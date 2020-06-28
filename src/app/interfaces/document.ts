import { Annotation } from './annotation';
export interface Document {
    doc_id: number;
    annotations: Annotation[];
}
