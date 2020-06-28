import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

  /**
   * Simulates the getter of Texts
   * @returns Array
   */
  getTexts() {
    return [
      {text: 'Steve Jobs: He Brought the Show to Business', source: 'The New York Times', doc_id: 0},
      {text: 'Silicon Valley\'s Youth Problem', source: 'The New York Times', doc_id: 1}
    ];
  }
}
