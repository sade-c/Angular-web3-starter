import { EventOptions } from 'web3-eth-contract';

export interface EventMonitoringParameters {
  // name of the event to be monitored
  eventName: string;
  //optional filters of events
  web3jsParameters?: EventOptions;
}
