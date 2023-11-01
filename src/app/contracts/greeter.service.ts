import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  ContractInterface, ethers } from 'ethers';
import Greeter from '../artifacts/Greeter.json'

import { environment } from '../../environments/environment'; 
import { AbiItem } from 'web3-utils';
 
import { Observable } from 'rxjs';
import { GlobalAlertService } from '../web3/global-alert.service';
import { CallbackFunction, TransactionResult } from '../web3/model';
import { DefaultProviderService } from '../web3/providers/default-provider.service';
import { WalletProviderService } from '../web3/providers/wallet-provider.service';
import { BaseContract } from '../web3/providers/base-contract.service';

@Injectable({
    providedIn: 'root'
})
export class GreeterService extends BaseContract {
    
  
    getContractABI(): ContractInterface  {
        return Greeter.abi  as ContractInterface;
    }


   

    constructor(public provider: DefaultProviderService, private wallet: WalletProviderService,  _messageService: GlobalAlertService) {

        super(_messageService, wallet, wallet.currentConfig.contracts.Greeter);

    }



    async greet(): Promise<string> {
        let greet = await (await this.getString(Greeter.abi as ContractInterface, 'greet'))
        console.log(greet);
        return greet;
    }

    finalSetGreetings(greeting: string, _callback?: CallbackFunction): Observable<TransactionResult<string>> {
        return this.send(
            Greeter.abi as ContractInterface,
            'setGreeting',
            `Transaction to send  ${greeting} was sent successfully`,
            _callback,
            `Transaction to finalize tchanged ${greeting} was confirmed`,
            greeting
        );
    }
}
