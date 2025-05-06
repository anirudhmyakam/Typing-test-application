import { TestBed } from '@angular/core/testing';

import { VarificationService } from './verification.service';

describe('VarificationService', () => {
  let service: VarificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VarificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
