import { EventFilter } from './EventPastParameters';

export interface EventMonitoringParameters {
  // name of the event to be monitored
  eventName: string;
  // listener
  listenerFunction: (...args: Array<any>) => void;
  //optional filters of events
  args?: any[] | EventFilter;
}
