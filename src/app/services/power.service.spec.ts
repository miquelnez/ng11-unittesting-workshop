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

  describe('when base is 0', () => {
    describe('power(0, 2)', () => {
      it('should be 0', () => {
        expect(service.power(0, 2)).toBe(0);
      });
    });

    describe('power(power(0, 22))', () => {
      it('should be 0', () => {
        expect(service.power(0, 22)).toBe(0);
      });
    });
  });

  describe('when exponent is 0', () => {
    describe('power(2, 0)', () => {
      it('should be 1', () => {
        expect(service.power(2, 0)).toBe(1);
      });
    });

    describe('power(power(100, 0))', () => {
      it('should be NaN (negative numbers don\'t have a real square root)', () => {
        expect(service.power(100, 0)).toBe(1);
      });
    });
  });

  describe('when base and exponent are integers', () => {
    describe('power(7,2)', () => {
      it('should be 49', () => {
        expect(service.power(7, 2)).toBe(49);
      });
    });

    describe('power(2,2)', () => {
      it('should be 4', () => {
        expect(service.power(2, 2)).toBe(4);
      });
    });
  });

  describe('when exponent is lower than 1', () => {
    describe('power(4, 0.5)', () => {
      it('should be 2 (square root of 4)', () => {
        expect(service.power(4, 0.5)).toBe(2);
      });
    });

    describe('power(8, 1/3)', () => {
      it('should be 2 (cube root of 8)', () => {
        expect(service.power(8, 1 / 3)).toBe(2);
      });
    });

    describe('power(2, 0.5)', () => {
      it('should be 1.4142135623730951 (square root of 2)', () => {
        expect(service.power(2, 1 / 2)).toBe(1.4142135623730951);
      });
    });
  });

  describe('when exponent is signed', () => {
    xdescribe('power(7, -2)', () => {
      it('should be 1/49', () => {
        expect(service.power(7, -2)).toBe(1 / 49);
      });
    });

    describe('power(8, -1/3)', () => {
      it('should be 1/2', () => {
        expect(service.power(8, -1 / 3)).toBe(0.5);
      });
    });
  });

  describe('when base is signed', () => {
    describe('power(-7, 2)', () => {
      it('should be 49', () => {
        expect(service.power(-7, 2)).toBe(49);
      });
    });

    describe('power(-7, 0.5)', () => {
      it('should be NaN (negative numbers don\'t have a real square root)', () => {
        expect(service.power(-7, 0.5)).toBeNaN();
      });
    });
  });
});
