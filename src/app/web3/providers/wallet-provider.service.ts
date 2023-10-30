import { Inject, Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { BigNumber, Contract,ContractInterface, ethers, providers, Signer, } from 'ethers'
import detectEthereumProvider from '@metamask/detect-provider';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NetworkParams } from './network-params.interface';
import { Angweb3Config } from './angweb3-config.interface';
import { AbiItem } from 'web3-utils';
//import { EnvironmentProviderService } from './environment-provider.service';
declare global {
    interface Window {
      ethereum: any;
    }
  }
  
@Injectable({
    providedIn: 'root'
})
export class WalletProviderService {
    
    private provider!: ethers.providers.Web3Provider;
    ethereum; 
    signer: Signer

    currentAccount
    currentNetwork: NetworkParams
    currentConfig: Angweb3Config;

     connectedSignal: WritableSignal<boolean> = signal(false);
    accountSubject: BehaviorSubject<any> = new BehaviorSubject<Signer | null>(null);
    networkSubject: BehaviorSubject<any> = new BehaviorSubject(null)

    constructor(     ) {
    
        this.initializeNetworkConnection()
        this.listenToEvents();
    }
    listenToEvents(){
        let eth:any = window.ethereum;
        if(eth){
          eth.on('accountsChanged', (accounts: any) => {
            if (accounts.length > 0) {
              this.setCurrentAccount(accounts[0])
            }else{
              this.setCurrentAccount(null)
            }
          });
        }
    
     
      }
    async connect(): Promise<boolean> {
        try {
            let ethereum = await detectEthereumProvider();
            console.log('ethereum = ', ethereum)
            if (ethereum) {
                await this.startApp(ethereum)
                return ethereum != undefined
            } else {
                return false
            }
        } catch (error) {
            console.error('unable to detect ethereum provider: ', error)
            return false
        }
    }

    isConnected(): boolean {
        return this.currentAccount != null && this.currentAccount != undefined
    }

    async startApp(ethereum: any) {
        this.provider = new ethers.providers.Web3Provider(ethereum, 'any')
        this.signer = await this.provider.getSigner()
        this.registerHandlers()
        if (ethereum.selectedAddress) {
            ethereum.enable();

            this.setCurrentAccount(ethereum.selectedAddress)
            this.connectedSignal.set(true);

        } else {
        }
        // if (provider !== window.ethereum) {
        //   console.error('multiple wallets installed')
        // } else {
        //   let trySigner = await eth.getSigner()
        //   console.log('trySigner = ', trySigner)
        // }
    }

    async addNetwork() {
        if (!this.provider || !this.currentNetwork) {
            return
        }
        console.log('about to add: ', this.currentNetwork)
        this.provider
            .send(
                'wallet_addEthereumChain',
                [this.currentNetwork]
            )
            .catch((error: any) => {
                console.log(error)
            })
    }

    async addToken(address: string, symbol: string, decimals: number, image?: string) {
        this.provider
            .send(
                'wallet_watchAsset',
                [{
                    type: 'ERC20',
                    options: {
                        address,
                        symbol,
                        decimals,
                        image
                    },
                }])
            .then((success) => {
                if (success) {
                    console.log('successfully added to wallet!');
                } else {
                    throw new Error('Something went wrong.');
                }
            })
            .catch(console.error);
    }

    async getAccounts() {
        if (!this.provider) {
            return
        }

        console.log('getting accounts')
        const accounts = await this.provider.send('eth_requestAccounts', []);
        if (accounts.length > 0) {
            this.setCurrentAccount(accounts[0])
            this.connectedSignal.set(true);


        } else {
            let accounts = await this.enableEthereum()
            if (accounts.length > 0) {
                this.setCurrentAccount(accounts[0])
                this.connectedSignal.set(true);

            } else {
                this.setCurrentAccount(null)
                this.connectedSignal.set(false);

            }
        }
        this.signer = this.provider.getSigner()
        console.log('signer is now ', this.signer)
        this.handleAccountChanged(accounts);
        return accounts
    }
     /**
   * @returns The current signer in the provider (wallet)
   */
  get_Signer() {
    return this.accountSubject.value;
  }
    getUserAccountAddressSubject() {
        return this.accountSubject.asObservable();
    }
    getaccountSubject() {
        return this.accountSubject.asObservable();
    }
    getnetworkSubject() {
        return this.networkSubject.asObservable();
    }
    async disconnect() {
        // not the right call
        // await this.ethereum.disconnect()
    }

    async checkBalance(): Promise<BigNumber | BigNumber> {
        if (this.currentAccount) {
            return await this.provider.getBalance(this.currentAccount)
        } else {
            return BigNumber.from(0)
        }
    }

    async balanceIsOver(value: BigNumber): Promise<boolean | boolean> {
        if (this.currentAccount) {
            const balance: BigNumber = await this.provider.getBalance(this.currentAccount)
            console.log(`Balance=${balance}, value=${value}`)
            return balance.gt(value) // must be strictly > to account for gas cost.
        } else {
            return false
        }
    }

  /**
   * Gets the balance of the {_accountAddress} in the official currency of chain in use (ex. Ether in case of Ethereum)
   *
   * @param _accountAddress The account address which balance is wanted
   * @returns The BigNumber value in Wei
   */
  balanceOf(_accountAddress: string): Observable<BigNumber> {
    if (_accountAddress == null) throw new Error(`Account address is null`);
    return new Observable<BigNumber>((_subscriber) => {
      this.provider
        .getBalance(_accountAddress)
        .then((_balance: BigNumber) => {
            console.log(`Balance=${_balance} `)

          _subscriber.next(_balance);
        })
        .catch((e: Error) => {
          console.warn(`web3Service`, e);
        });
    });
  }

    async enableEthereum(): Promise<any> {
        return await this.provider.on;
    }

    private async registerHandlers() {
        console.log('registering handlers');
        this.provider.on('connect', this.handleAccountConnected.bind(this));
        this.provider.on('disconnect', this.handleAccountDisconnected.bind(this));
        this.provider.on('network', this.handledChainChanged.bind(this));
        this.provider.on('accountsChanged', this.handleAccountChanged.bind(this));
        this.provider.on('chainChanged', (_chainId: string) => window.location.reload());
    }

    private handleAccountConnected(accounts) {
        console.log('>>> Account connected: ', accounts)
    }

    private handleAccountDisconnected(accounts) {
        console.log('>>> Account disconnected: ', accounts)
    }

    private handledChainChanged(network) {
        console.log('>>> Chain changed to: ', network)
        this.networkSubject.next(this.getHexString(network.chainId))
    }

    private handleAccountChanged(accounts) {
        if (accounts.length > 0) {
            this.setCurrentAccount(accounts[0])
            this.connectedSignal.set(true);

        } else {
            this.setCurrentAccount(null)
            this.connectedSignal.set(false);

        }
        console.log('>>> Account changed to: ', accounts)
    }

    private setCurrentAccount(account: string | null) {
        this.currentAccount = account
        this.accountSubject.next(account)
    }

    private initializeNetworkConnection() {
        let eth: any = this.ethereum
        if (eth) {
            let hexVersion = this.getHexString(eth.networkVersion)
            console.log('current network version is: ', hexVersion)
            this.handledChainChanged(hexVersion)
        } else {
            console.log('no ethereum')
        }
        let cNetwork: NetworkParams = environment.config.networkParams
        if (cNetwork && cNetwork.chainId) {
        }
        this.currentNetwork = cNetwork
        this.currentConfig = environment.config
    }
    /*     async getContract1(_abi: any, _address: string): Promise<Contract | null> {
            if ((await this.provider.getCode(_address)) === '0x') {
                console.error(`Address ${_address} is not a contract at the connected chain`);
                return null;
            }
            return new Contract(_address, _abi, this.provider);
        } */
    /**
 * Return the contrat based on ABIs and address informed
 *
 * @param _abis Abis of contract
 * @param _address Address of contract
 */
    async getContract(
        _abis: ContractInterface,
        _address: string
      ): Promise<any | null> {
        try {
          console.log(`ethersjsService.getContract`, _address);
          if ((await this.provider.getCode(_address)) === '0x') {
            console.warn(
              `Address ${_address} is not a contract at the connected chain`
            );
            return null;
          }
        } catch (e) {
          console.warn(e);
          return null;
        }
        const resultingContract = new ethers.Contract(
          _address,
          _abis,
          this.provider.getSigner(_address)
        );
        console.log(
          `ethersjsService.getContract`,
          resultingContract
        );
        return resultingContract;
      }
    private getHexString(networkCode) {
        return `0x${(+networkCode).toString(16)}`
    }

    currencyName(): string {
        return environment.config.networkParams.nativeCurrency.symbol
    }

  /**
   * @returns Lastest block in the current connected chain
   */
   getCurrentBlockNumber(): Promise<number> {
    return this.provider.getBlockNumber();
  }
    onboard() { }
    /**
   * Gets data about the current Ethereum network including name, chainId and ensAdress
   *
   * @returns data about the current network Metamask is connected with
   */
  getCurrentNetwork(): Promise<ethers.providers.Network> {
    return this.provider.getNetwork();
  }
}
