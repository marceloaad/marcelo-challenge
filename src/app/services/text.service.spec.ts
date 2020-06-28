import { TestBed } from '@angular/core/testing';
import { TextService } from './text.service';

describe('TextService', () => {
  let service: TextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Texts Array should not be empty', () => {
    const texts = service.getTexts();
    expect(texts.length).toBeGreaterThan(0);
  });
});
