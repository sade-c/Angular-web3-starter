# Angular-web3-starter

Basic operations for those who want to develop web3 on Angular.

## Template

Free Angular Admin Template by PrimeNG
www.primefaces.org/sakai-ng

## Usage

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
