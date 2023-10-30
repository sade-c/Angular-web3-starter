import { Web3Event } from './Event';

type FunctionCallback = (evt: Web3Event) => void;
type FunctionOn = (param: `data` | `changed` | `error`, callback: FunctionCallback) => void;
export interface Web3Subscription {
  on: FunctionOn;
  unsubscribe: Function;
}
