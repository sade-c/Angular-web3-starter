import { NetworkParams } from "./network-params.interface";

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
