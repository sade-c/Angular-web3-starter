import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import Greeter from '../artifacts/Greeter.json'

import { environment } from '../../environments/environment';
import { DefaultProviderService } from '../shared/providers/default-provider.service';
import { WalletProviderService } from '../shared/providers/wallet-provider.service';
import { ProviderErrors } from '../shared/model/eip1193/providerErrors';

@Injectable({
    providedIn: 'root'
})
export class GreeterService {

    greeterContract: any

    constructor(public provider: DefaultProviderService, private wallet: WalletProviderService, private http: HttpClient) {
        this.greeterContract = new ethers.Contract(
            wallet.currentConfig.contracts.Greeter,
            Greeter.abi,
            provider.provider
        );
    }



    async greet() {
        let greet = await this.greeterContract.greet();
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
}
