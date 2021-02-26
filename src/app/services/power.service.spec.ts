import { TestBed } from '@angular/core/testing';

import { PowerService } from './power.service';

describe('PowerService', () => {
  let service: PowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('power of two should work', () => {
    expect(service.power(2,2)).toBe(4);
  });

  it('power of other number is NaN', () => {
    expect(service.power(3,2)).toBe(NaN);
  });
});
