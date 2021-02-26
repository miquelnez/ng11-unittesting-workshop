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

  it('power of 2, 2 should be 4', () => {
    expect(service.power(2,2)).toBe(4);
  });

  
  it('power of 3, 2 should be 9', () => {
    expect(service.power(3,2)).toBe(9);
  });

  
  it('power of 5, 0 should be 1', () => {
    expect(service.power(5,0)).toBe(1);
  });

  it('Result is number', () => {
    expect(service.power(3,2)).toBe(NaN);
  });
});
