import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import Greeter from '../artifacts/Greeter.json'

import { environment } from '../../environments/environment';
import { DefaultProviderService } from '../shared/providers/default-provider.service';
import { WalletProviderService } from '../shared/providers/wallet-provider.service';
import { ProviderErrors } from '../shared/model/eip1193/providerErrors';
import { BaseContract } from '../shared/providers/base-contract.service';
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

   

    constructor(public provider: DefaultProviderService, private wallet: WalletProviderService, private http: HttpClient, _messageService: GlobalAlertService) {
        super(_messageService, wallet, wallet.currentConfig.contracts.Greeter);

    }



    async greet(): Promise<string> {
        let greet = await (await this.getString(Greeter.abi as AbiItem[], 'greet'))
        console.log(greet);
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
