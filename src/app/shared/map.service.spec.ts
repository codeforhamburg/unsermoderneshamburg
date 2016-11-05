/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapServiceService } from './map.service';

describe('Service: MapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapServiceService]
    });
  });

  it('should ...', inject([MapServiceService], (service: MapServiceService) => {
    expect(service).toBeTruthy();
  }));
});
