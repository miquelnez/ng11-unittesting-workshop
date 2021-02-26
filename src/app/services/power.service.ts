import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * As an architect, I want a new function with two parameters, one for the base and other for the exponent.
 * The result should be a number.
 * example: 2 as base, 2 as exponent, should be 4
 */
export class PowerService {

  constructor() { }

  power(base: number, exponent: number): number{
    // if(base === 2 && exponent ===2) {
    //   return 4;
    // }
    // return NaN;
    return Math.pow(base, exponent);
  }
}
