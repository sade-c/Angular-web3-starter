import { PastEventOptions } from 'web3-eth-contract';
import { EventMonitoringParameters } from './EventMonitoringParameters';

export interface EventPastParameters extends EventMonitoringParameters {
  web3jsParameters: PastEventOptions;
}
