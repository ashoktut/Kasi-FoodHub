import { TestBed } from '@angular/core/testing';

import { Data.Service.TsService } from './data.service.ts.service';

describe('Data.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Data.Service.TsService = TestBed.get(Data.Service.TsService);
    expect(service).toBeTruthy();
  });
});
