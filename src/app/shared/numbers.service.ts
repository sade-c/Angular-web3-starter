import { Injectable } from '@angular/core';
import BigNumber from 'bignumber.js';
import BN from 'bn.js';

@Injectable({
  providedIn: 'root',
})
export class NumbersService {
  constructor() { }

  /**
   * Time in Ethereum are represented in 'seconds' since 1/1/1970. While in Javascript, it's in milliseconds
   * @param timeInMillisJS Time in milliseconds since 1/1/1970 UTC
   * @returns Time in seconds since 1/1/1970 UTC
   */
  convertTimeJSToChain(timeInMillisJS: number) {
    return new BigNumber(timeInMillisJS / 1000);
  }

  /**
   * Time in Ethereum are represented in 'seconds' since 1/1/1970. While in Javascript, it's in milliseconds
   * @param timeInSeconds Time in seconds since 1/1/1970 UTC
   * @returns Time in milliseconds since 1/1/1970 UTC
   */
  convertTimeChainToJS(timeInSeconds: number) {
    return timeInSeconds * 1000;
  }

  /**
   * We need to convert values to string on forms. If a huge number, the constructor of BN throws exception
   *
   * @param formRawValue Object with form values
   * @returns Struct with form values in string format
   */
  convertNumberToString(value: number): string {
    return value?.toLocaleString('fullWide', {
      useGrouping: false,
    });
  }

  /**
   * @param bn Return the {bn} formatted with thousands separator
   */
  formatBN(bn: BN): string {
    if (!bn) return '?';
    let result = '';
    const bnString = bn.toString();
    for (let i = bnString.length; i > 0; i = i - 3) {
      result = bnString.substring(i - 3, i) + (result.length > 0 ? ',' : '') + result;
    }
    return result;
  }

  /**
   * @param bn format the {bn} formatted with expression in shortscale 'million', 'billion', 'trillion'.
   * @see: https://www.antidote.info/en/blog/reports/millions-billions-and-other-large-numbers
   */
  formatBNShortScale(bn: BN): string {
    let bnFormatted = this.formatBN(bn);
    if (bnFormatted.indexOf(',') == -1) return bnFormatted;
    const parts = bnFormatted.split(',');
    if (parts.length <= 2) return bnFormatted;
    return parts[0].concat(`.${parts[1].substring(0, 1)}`).concat(` ${this.SHORT_SCALE_TABLE[parts.length]}`);
  }

  /**
   * @dev https://www.antidote.info/en/blog/reports/millions-billions-and-other-large-numbers
   */
  private SHORT_SCALE_TABLE = [
    '',
    '',
    '',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion',
  ];
}

/* 
### NumberService

Offers a set of methods to format/convert numbers:


- `convertTimeJSToChain(timeInMillisJS: number)`: receives the time in milliseconds since since 1/1/1970 UTC and returns the time in seconds since 1/1/1970 UTC.
- `convertTimeChainToJS(timeInSeconds: number)`: receives the time in seconds since since 1/1/1970 UTC and returns the time in milliseconds since 1/1/1970 UTC
- `convertNumberToString(value: number)`: convert a number to locale string.
- `formatBN(bn: BN, decimals: number)`: formats a BigNumber considering the number of decimals.
- `formatBNShortScale(bn: BN, decimals: number)`: formats a BigNumber to a short scale format considering the number of decimals..
 */