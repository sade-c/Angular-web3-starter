import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {   constants, Contract, ethers, utils } from 'ethers';
import Faucet from '../artifacts/Faucet.json'
import SuperToken from '../artifacts/SuperToken.json'
import { environment } from '../../environments/environment';
import { DefaultProviderService } from '../shared/providers/default-provider.service';
import { WalletProviderService } from '../shared/providers/wallet-provider.service';
import { AbiItem } from 'web3-utils';
import { BaseContract } from '../shared/providers/base-contract.service';
import { GlobalAlertService } from '../shared/global-alert.service';
import { Observable } from 'rxjs';
import { CallbackFunction, TransactionResult } from '../shared/model';

@Injectable({
    providedIn: 'root'
})
export class FaucetService {

    faucetContract: any;
    SuperContract: any;

    constructor(provider: DefaultProviderService, private wallet: WalletProviderService, private http: HttpClient) {
        this.faucetContract = new ethers.Contract(
            wallet.currentConfig.superToken.fUSDC,
            Faucet.abi,
            provider.provider
        );
        this.SuperContract = new ethers.Contract(
            wallet.currentConfig.superToken.fUSDCx,
            SuperToken.abi,
            provider.provider
        );
    }

    async mint() {
        let amount = 1000000 * 10 ** 6;
        let amountSuper = 1000 * 10 ** 18;
        await this.faucetContract.connect(this.wallet.signer)['mint(uint256)'](amount);
    }
    async approve() {
        await this.faucetContract.connect(this.wallet.signer).approve(
            environment.config.superToken.fUSDCx,
            constants.MaxUint256
        )
    }
    async upgrade() {
        const value = utils.parseEther('1000000').toString();
        await this.SuperContract.connect(this.wallet.signer).upgrade(value);

    }





}
