export interface Annotation {
    type: string;
    offset: Offset;
}
interface Offset {
    start_char: number;
    end_char: number;
}
