import { Pipe, PipeTransform } from '@angular/core';
import { BigNumber, ethers } from 'ethers';

@Pipe({
    name: 'formatEth'
})

export class EthFormattingPipe implements PipeTransform {

    transform(value: BigNumber): string {
        return this.formatted(value)
    }

    formatted(price: BigNumber) {
        if (price) {
            return ethers.utils.formatEther(price)
        } else {
            return '-'
        }
    }
}