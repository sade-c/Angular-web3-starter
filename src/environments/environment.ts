// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

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
      chainIdNumber: 43113,
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
    },
    superToken: {

      Resolver: "0x141920741bC45b962B59c833cd849bA617F7ef38",
      Host: "0xf04F2C525819691ed9ABD3D2B7109E1633795e68",
      CFAv1: "0xED74d30B8034152b0638CB03cc5c3c906dd1c482",
      IDAv1: "0x997d745884F54a93E6662b055c5e6c09F688718b",
      SuperTokenFactory: "0xA25dbEa94C5824892006b30a629213E7Bf238624",
      SuperfluidLoader: "0x777Be25F9fdcA87e8a0E06Ad4be93d65429FCb9f",
      CFAv1Forwarder: "0xcfA132E353cB4E398080B9700609bb008eceB125",
      AVAXx: "0x5735C32C38f5Af0FB04a7c77C832Ba4D7aBfFeC8",
      fDAI: "0x87E00Dced5670e01BEe33a9a724B1dac790937eF",
      fUSDC: "0xE01F8743677Da897F4e7De9073b57Bf034FC2433",
      fTUSD: "0x1031b9bD6544d266A7B462744dF28Dc4A7A08CAe",
      fDAIx: "0x296E9c01f80D408741f6e15d62013DDbe1041f1D",
      fUSDCx: "0x896C3e90446237be3e27eB4D67e0D3c97FB3b03F",
      fTUSDx: "0x36BBF94e66f0c953CB451b302e345D6E50c2A215"


    }
  }

}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
