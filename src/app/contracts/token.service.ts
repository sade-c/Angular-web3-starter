import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BigNumber, ethers } from 'ethers';
import { DefaultProviderService } from '../shared/providers/default-provider.service';
import { WalletProviderService } from '../shared/providers/wallet-provider.service';
import ERC20 from '../artifacts/ERC20.json';
@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor(private provider: DefaultProviderService, private wallet: WalletProviderService, private http: HttpClient) {

    }

    async name(contract): Promise<string> {
        return await contract.name()
    }

    async symbol(contract): Promise<string> {
        return await contract.symbol()
    }

    async approve(contract, spender: string, amount: BigNumber) {
        await contract.connect(this.wallet.signer).approve(spender, amount)
    }

    async allowance(contract, account: string, spender: string): Promise<BigNumber> {
        return await contract.allowance(account, spender)
    }

    async balanceOf(contract, account: string): Promise<BigNumber> {
        return await contract.balanceOf(account)
    }

    async transfer(contract, to: string, amount: BigNumber) {
        await contract.connect(this.wallet.signer).transfer(to, amount)
    }

    async totalSupply(contract): Promise<BigNumber> {
        return await contract.totalSupply()
    }

    contractAt(address: string) {
        return new ethers.Contract(
            address,
            ERC20.abi,
            this.provider.provider
        )
    }
}
