// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    environmentName: 'Polygon Mumbai Testnet',
    jsonRpcUrl: 'https://polygon-mumbai.g.alchemy.com/v2/-***',
    config: {
        contracts: {
            USDC: '',
            mUSDC: '',
            WrappedNative: '',
            Faucet: '',
            Greeter: "0x2b7Ca997504485BFA6dDED203A25F8aAFc9496A8",
        },
        networkParams: {
            chainId: '0x13881',
            chainName: 'Polygon Mumbai Testnet',
            nativeCurrency: {
                name: 'Matic',
                symbol: 'MATIC',
                decimals: 18
            },
            rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
            blockExplorerUrls: ['https://mumbai.polygonscan.com/']
        },
        ui: {
            chainName: 'Polygon',
            logo: '/assets/logos/matic-token-icon.png',
            txUrlPrefix: 'https://mumbai.polygonscan.com/tx/'
        },
        superToken: {

            Resolver: "0x8C54C83FbDe3C59e59dd6E324531FB93d4F504d3",
            Host: "0xEB796bdb90fFA0f28255275e16936D25d3418603",
            CFAv1: "0x49e565Ed1bdc17F3d220f72DF0857C26FA83F873",
            IDAv1: "0x804348D4960a61f2d5F9ce9103027A3E849E09b8",
            SuperTokenFactory: "0x200657E2f123761662567A1744f9ACAe50dF47E6",
            SuperfluidLoader: "0x0d56ED56b63382B0FC964490feB9AE438B6B4b79",
            CFAv1Forwarder: "0xcfA132E353cB4E398080B9700609bb008eceB125",
            MATICx: "0x96B82B65ACF7072eFEb00502F45757F254c2a0D4",
            fDAI: "0x15F0Ca26781C3852f8166eD2ebce5D18265cceb7",
            fUSDC: "0xbe49ac1EadAc65dccf204D4Df81d650B50122aB2",
            fTUSD: "0xA794C9ee519FD31BbCE643e8D8138f735E97D1DB",
            fDAIx: "0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f",
            fUSDCx: "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7",
            fTUSDx: "0x918E0d5C96cAC79674E2D38066651212be3C9C48",


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
