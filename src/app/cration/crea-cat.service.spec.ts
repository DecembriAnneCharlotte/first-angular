import { TestBed } from '@angular/core/testing';

import { CreaCatService } from './crea-cat.service';

describe('CreaCatService', () => {
  let service: CreaCatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaCatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
