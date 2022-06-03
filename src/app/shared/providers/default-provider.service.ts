import { Injectable } from '@angular/core';
import { ethers, providers } from 'ethers';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DefaultProviderService {

    provider: ethers.providers.JsonRpcProvider

    constructor() {
        this.provider = new ethers.providers.JsonRpcProvider(environment.jsonRpcUrl);
    }

    async getBlockNumber() {
        const blockNumber = await this.provider.getBlockNumber();
        console.log('block number is: ', blockNumber);
    }
    async getNetwork() {
        const getNetwork = await this.provider.getNetwork;
        console.log(' Network is: ', getNetwork);
    }
    async getGasPrice() {
        const GasPrice = await this.provider.getGasPrice;
        console.log(' GasPrice is: ', GasPrice);
    }
    async getBalance(address: string) {
        const balance = await this.provider.getBalance(address);
        console.log(' balance is: ', balance);
    }


}
