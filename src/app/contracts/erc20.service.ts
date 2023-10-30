import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import ERC20 from '../artifacts/ERC20.json'
 
import { environment } from '../../environments/environment';
import { DefaultProviderService } from '../shared/providers/default-provider.service';
import { WalletProviderService } from '../shared/providers/wallet-provider.service';
import { ProviderErrors } from '../shared/model/eip1193/providerErrors';
import { BaseContract } from '../shared/providers/base-contract.service';
import { GlobalAlertService } from '../shared/global-alert.service';
import { AbiItem } from 'web3-utils';
import { CallbackFunction, TransactionResult } from '../shared/model';
 import { ERC20BaseContract } from '../shared/providers/ERC20-base';
import { ABI } from '../artifacts/erc20';

@Injectable({
    providedIn: 'root'
})
export class Erc20Service extends ERC20BaseContract {
   

    getContractABI(): AbiItem[] {
        return    ABI.usdc  ;
    }

   

    constructor(public provider: DefaultProviderService, private wallet: WalletProviderService, private http: HttpClient, _messageService: GlobalAlertService) {
       
        super(_messageService, wallet, wallet.currentConfig.contracts.USDC);

    }


 

 
}
