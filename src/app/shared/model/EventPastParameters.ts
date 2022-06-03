import { EventMonitoringParameters } from './EventMonitoringParameters';

export interface EventPastParameters extends EventMonitoringParameters {
  // initial block of search
  fromBlock?: number;
  // final block of search
  toBlock?: number | string;
}
