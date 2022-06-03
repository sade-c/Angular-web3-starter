export interface EventMonitoringParameters {
  // name of the event to be monitored
  eventName: string;
  //optional filters of events
  filter?: { [key: string]: any };
}
