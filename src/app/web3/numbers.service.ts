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
   * Return the {bn} formatted with thousands separator
   *
   * @param bn The bignumber to be formatted
   * @param decimals the number of decimals representantion in the {bn}
   */
   formatBN(bn: BN, decimals: number): string {
    if (!bn) return '?';
    let result = '';
    // como o bn.js não suporta decimais, foi feita a formatação com
    // 3 decimais a menos para possibilitar a representação de frações
    const decimalsLess3 = decimals > 3 ? decimals - 3 : decimals;
    try {
      const bnDivByDecimalsLess3 = bn.div(
        new BN(Math.pow(10, decimalsLess3).toString())
      );
      // Se o valor de {bn} for menor que os decimais menos 3 casas decimais, resultando
      // em zero na divisão, será retornado simplesmente o valor dividido por {decimals}
      if (bnDivByDecimalsLess3.isZero() && !bn.isZero()) {
        return (bn.toNumber() / Math.pow(10, decimals)).toString();
      }
      // Se o resultado for menor que 1000, a lógica do FOR abaixo não vai funcionar.
      // Neste caso, dividimos este resultado por 1000 (refente às 3 casas decimais retirada acima)
      else if (bnDivByDecimalsLess3.ltn(1000) && decimals != decimalsLess3) {
        return (bnDivByDecimalsLess3.toNumber() / 1000).toString();
      }
      const bnString = bnDivByDecimalsLess3.toString(); // bn.toString();
      for (let i = bnString.length; i > 0; i = i - 3) {
        result =
          bnString.substring(i - 3, i) +
          (result.length > 0 ? ',' : '') +
          result;
      }
    } catch (e) {
      console.error(
        decimalsLess3,
        new BN(Math.pow(10, decimalsLess3).toString()),
        e
      );
      result = bn.toString();
    }
    return result;
  }

 

    /**
   * @param bn format the {bn} formatted with expression in shortscale 'million', 'billion', 'trillion'.
   * @param decimals the number of decimals representantion in the {bn}
   * @see: https://www.antidote.info/en/blog/reports/millions-billions-and-other-large-numbers
   */
     formatBNShortScale(bn: BN, decimals: number): string {
      let bnFormatted = this.formatBN(bn, decimals);
      if (bnFormatted.indexOf(',') == -1) return bnFormatted;
      const parts = bnFormatted.split(',');
      if (parts.length <= 2) return bnFormatted;
      return parts[0]
        .concat(`.${parts[1].substring(0, 1)}`)
        .concat(` ${this.SHORT_SCALE_TABLE[parts.length]}`);
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