import { EventPastParameters, EventMonitoringParameters } from "../model";

 
 
export interface IContractEventMonitor {
  /**
   * Gets list of past events with the parameters requested
   *
   * @param _monitorParameter  Object with the parameteres of event monitoring including Name of the event;
   * an optional filter and the initial and final block of search
   *
   * @returns Events array
   */
  getContractsPastEvent(_monitorParameter: EventPastParameters): Promise<any[]>;

  /**
   * Subscribe to a contract's event  with optional filter parameters registering a listener function
   *
   * @param _monitorParameter  Object with the parameteres of event monitoring including Name of the event,
   * the listener function and optional filter arguments
   *
   */
  subscribeContractEvent(
    _monitorParameter: EventMonitoringParameters
  ): Promise<void>;

  /**
   * @returns Lastest block in the current connected chain
   */
  getCurrentBlockNumber(): Promise<number>;
}
