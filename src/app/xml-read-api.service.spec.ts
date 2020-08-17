import { TestBed } from '@angular/core/testing';

import { XmlReadApiService } from './xml-read-api.service';

describe('XmlReadApiService', () => {
  let service: XmlReadApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlReadApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
