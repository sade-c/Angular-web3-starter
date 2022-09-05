# Angular-web3-starter

![angular web3](./src/assets/angweb3.png?raw=true "angular web3")
Basic operations for those who want to develop web3 on Angular.

## Template

Free Angular Admin Template by PrimeNG
www.primefaces.org/sakai-ng

## Usage

 four enviroment

 ````
    "watch": "ng build --watch --configuration development",
    "build.polygon": "ng build --configuration polygon",
    "build.avalanche": "ng build --configuration avalanche",
    "build.hardhat": "ng build --configuration hardhat",`
````

![Alt text](./src/assets/greater.png?raw=true "Title")

![switchNetwork](./src/assets/switchNetwork.png?raw=true "switchNetwork")
environment.ts

````

export const environment = {
  production: false,
  environmentName: 'Avalanche Testnet C-Chain',
  jsonRpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
  config: {
    contracts: {
      USDC: '',
      mUSDC: '',
      WrappedNative: '',
      Faucet: '',
      Greeter: "0x2b7Ca997504485BFA6dDED203A25F8aAFc9496A8",
    },
    networkParams: {
      chainId: '0xA869',
      chainName: 'Avalanche Testnet C-Chain',
      nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18
      },
      rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
      blockExplorerUrls: ['https://testnet.snowtrace.io/']
    },
    ui: {
      chainName: 'Avalanche',
      logo: '/assets/logos/avalanche-avax-logo.png',
      txUrlPrefix: 'https://testnet.snowtrace.io/tx/'
    }
  },
}
````

## angweb3-config.interface.ts

 ````
 export interface Angweb3Config {
    contracts: {

        USDC: string;
        mUSDC: string;
        WrappedNative: string;
        Faucet: string;
        Greeter: string;
    },
    networkParams: NetworkParams
}
````

## default-provider.service

````
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

````

## wallet-provider.service

````
 class WalletProviderService {

    provider: any
    ethereum
    signer: Signer

    currentAccount
    currentNetwork: NetworkParams
    currentConfig: Angweb3Config;

    connectedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    accountSubject: BehaviorSubject<any> = new BehaviorSubject(null)
    networkSubject: BehaviorSubject<any> = new BehaviorSubject(null)

    constructor() {
        this.initializeNetworkConnection()
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
            ethereum.enable()
            this.setCurrentAccount(ethereum.selectedAddress)
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
                {
                    type: 'ERC20',
                    options: {
                        address,
                        symbol,
                        decimals,
                        image
                    },
                })
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
        } else {
            let accounts = await this.enableEthereum()
            if (accounts.length > 0) {
                this.setCurrentAccount(accounts[0])
            } else {
                this.setCurrentAccount(null)
            }
        }
        this.signer = this.provider.getSigner()
        console.log('signer is now ', this.signer)
        return accounts
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

    async enableEthereum(): Promise<any> {
        return await this.provider.enable()
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
        } else {
            this.setCurrentAccount(null)
        }
        console.log('>>> Account changed to: ', accounts)
    }

    private setCurrentAccount(account: string | null) {
        this.currentAccount = account
        this.accountSubject.next(account)
    }

    private initializeNetworkConnection() {
        let eth: any = window.ethereum
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

    private getHexString(networkCode) {
        return `0x${(+networkCode).toString(16)}`
    }

    currencyName(): string {
        return environment.config.networkParams.nativeCurrency.symbol
    }


    onboard() { }
}
````

## greeter.service.ts

````
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
````
