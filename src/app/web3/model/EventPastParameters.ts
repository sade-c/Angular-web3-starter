import BN from 'bn.js';
import { BigNumber } from 'ethers';
import { Filter } from 'web3-eth-contract';

// web3js
export type BlockNumber =
  | string
  | number
  | BN
  | BigNumber
  | 'latest'
  | 'pending'
  | 'earliest'
  | 'genesis';

export interface EventFilter {
  [key: string]: number | string | string[] | number[];
}

interface teste {
  x: Filter;
}
export interface EventPastParameters {
  // name of the event to be monitored
  eventName: string;
  //optional filters of events
  filter?: EventFilter;
  fromBlock?: BlockNumber | string | number;
  toBlock?: BlockNumber | string | number;
}
