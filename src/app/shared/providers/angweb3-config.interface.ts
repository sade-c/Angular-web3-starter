import { NetworkParams } from "./network-params.interface";
import { SuperAddress } from "./SuperAddress.interface";

export interface Angweb3Config {
    contracts: {

        USDC: string;
        mUSDC: string;
        WrappedNative: string;
        Faucet: string;
        Greeter: string;
    },
    networkParams: NetworkParams,
    superToken: SuperAddress
}
