import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import Greeter from '../artifacts/Greeter.json'

import { environment } from '../../environments/environment';
import { DefaultProviderService } from '../shared/providers/default-provider.service';
import { WalletProviderService } from '../shared/providers/wallet-provider.service';
import { ProviderErrors } from '../shared/model/eip1193/providerErrors';
import { BaseContract } from './base-contract.service';
import { GlobalAlertService } from '../shared/global-alert.service';
import { AbiItem } from 'web3-utils';
import { CallbackFunction, TransactionResult } from '../shared/model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GreeterService extends BaseContract {
    getContractABI(): AbiItem[] {
        return Greeter.abi as AbiItem[];
    }

    greeterContract: any

    constructor(public provider: DefaultProviderService, private wallet: WalletProviderService, private http: HttpClient, _messageService: GlobalAlertService) {
        super(_messageService, wallet, wallet.currentConfig.contracts.Greeter);
        this.greeterContract = new ethers.Contract(
            wallet.currentConfig.contracts.Greeter,
            Greeter.abi,
            provider.provider
        );
    }



    async greet(): Promise<string> {
        let greet = await (await this.getString(Greeter.abi as AbiItem[], 'greet'))

        //let greet = await this.greeterContract.greet();
        console.log(greet);
        return greet;
    }
    async setGreeting(greeting: string) {
        let greet = this.greeterContract.connect(this.wallet.signer).setGreeting(greeting)
            .then(() => { })
            .catch((err) => {
                if (err.code == 4001) {

                    console.error("error", ProviderErrors[err.code].title);
                }
            });


        return greet;
    }
    finalSetGreetings(greeting: string, _callback?: CallbackFunction): Observable<TransactionResult<string>> {
        return this.send(
            Greeter.abi as AbiItem[],
            'setGreeting',
            `Transaction to send  ${greeting} was sent successfully`,
            _callback,
            `Transaction to finalize tchanged ${greeting} was confirmed`,
            greeting
        );
    }
}
