import { TestBed } from '@angular/core/testing';

import { ProgramLanguagesService } from './program-languages.service';

describe('ProgramLanguagesService', () => {
  let service: ProgramLanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramLanguagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
