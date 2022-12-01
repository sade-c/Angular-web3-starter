import { EventData } from 'web3-eth-contract';

type FunctionCallback = (evt: EventData) => void;
type FunctionOn = (
  param: `data` | `changed` | `error` | `connected`,
  callback: FunctionCallback
) => void;
export interface Web3Subscription {
  on: FunctionOn;
  unsubscribe: Function;
}
