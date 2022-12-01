import BN from 'bn.js';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalAlertService } from '../global-alert.service';
import { Contract, EventData } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';
import {
  CallbackFunction,
  EventMonitoringParameters,
  EventPastParameters,
  ProviderErrors,
  TransactionResult,
} from '../model';
import { Web3Subscription } from '../model/events/Subscription';
import Web3 from "web3"; 
import { WalletProviderService } from './wallet-provider.service';
export abstract class BaseContract {
    protected contract!: Contract;
    protected _eventListeners: { [event: string]: BehaviorSubject<any> } = {};
    private _owner!: string;
    private _fromAccount!: string | null;
    public address: string;

    constructor(protected _messageService: GlobalAlertService, protected _web3Service: WalletProviderService, _address: string) {
        this.address = _address;
        this._web3Service.getUserAccountAddressSubject().subscribe((_account) => {
            this._fromAccount = _account;
        });
    }

    protected async getContract(_abis: AbiItem[]): Promise<Contract> {

        if (this.contract != null) {
            return this.contract;
        } else if (this._web3Service) {
            const _contract = await this._web3Service.getContract(_abis, this.address);
            if (_contract == null) {
                throw new Error(`Contract not found. Confirm that your wallet is connected on the right chain`);
            } else {
                return _contract;
            }
        }
        throw new Error(`Web3 not instanciated`);
    }

    /**
     * Returns the contract ABI
     */
    abstract getContractABI(): AbiItem[];

    /**
     * @returns The owner of contract
     */
    owner(): Observable<string> {
        return new Observable<string>((_subscriber) => {
            if (this._owner) {
                _subscriber.next(this._owner);
            } else {
                this.getString(this.getContractABI(), 'owner').then((_address) => {
                    this._owner = _address;
                    _subscriber.next(this._owner);
                });
            }
        });
    }

    /**
     * @returns returns TRUE if the wallet address is equal to the contract owner
     */
    isOwner(): Observable<boolean> {
        return new Observable<boolean>((_subscriber) => {
            this.owner().subscribe((_ownerAddress) => {
                this._web3Service.getUserAccountAddressSubject().subscribe((_userAddress) => {
                    _subscriber.next(_ownerAddress === _userAddress);
                });
            });
        });
    }

    /**
     * If already exists an BehaviorSubject associated to the event {_eventName} and {_filter}, returns it
     * Otherwise, instances a BehaviorSubject associated to the event and returns it
     *
     * @param _monitorParameter Object with the parameteres of event monitoring including Name of the event
     * which BehaviorSubject will be associated; an optional filter and an optional  parameter that indicates,
     * if is a historical search, from which block
     *
     * @returns Promise of instance of BehaviorSubject associated with the event {_eventName}
     */
    async getEventBehaviorSubject(_monitorParameter: EventMonitoringParameters): Promise<BehaviorSubject<any>> {
        const _contract = await this.getContract(this.getContractABI());
        const _validationResult = this._validateEventAndInstanceSubject(
            _contract,
            _monitorParameter.eventName,
            _monitorParameter.web3jsParameters
        );
        const _key = _validationResult.key;
        if (_validationResult.new) {
            let _eventParam = undefined;
            if (_monitorParameter.web3jsParameters) {
                _eventParam = { filter: _monitorParameter.web3jsParameters };
            }

            const subscription = _contract.events[_monitorParameter.eventName](_eventParam);
            // console.log(_monitorParameter.eventName, subscription);
            // console.log(`unsub`, subscription.unsubscribe);
            subscription
                .on('data', (event: any) => {
                    if (this._eventListeners[_key]) {
                        this._eventListeners[_key].next(event.returnValues);
                    }
                })
                .on('error', (e: any) => {
                    console.error(_monitorParameter.eventName, e);
                    //throw e;
                });
        }
        return this._eventListeners[_key];
    }

    /**
     * Gets a instance of WEB3.JS Subscription of an event with the parameters requested
     * @param _monitorParameter  Object with the parameteres of event monitoring including Name of the event
     * and an optional filter and an optional  parameter that indicates,
     * if is a historical search, from which block
     *
     * @returns WEB3.JS Subscription
     */
    async getWeb3EventSubscription(_monitorParameter: EventMonitoringParameters): Promise<Web3Subscription> {
        const _contract = await this.getContract(this.getContractABI());
        return _contract.events[_monitorParameter.eventName](_monitorParameter);
    }
    /**
     * Gets a instance of Web3Event Subscription of an event  
    
 
     * @returns EventData[] Subscription
     */
    async allWeb3Events(): Promise<EventData[]> {
        const _contract = await this.getContract(this.getContractABI())
        return _contract.getPastEvents("allEvents");

    }
    /**
     * Gets a instance of WEB3.JS Subscription of past events with the parameters requested
     * @param _monitorParameter  Object with the parameteres of event monitoring including Name of the event;
     * an optional filter and, for historical search, the initial and final block of search
     *
     * @returns WEB3.JS Subscription
     */

    async getWeb3PastEventSubscription(_monitorParameter: EventPastParameters): Promise<EventData[]> {
        const _contract = await this.getContract(this.getContractABI());
        return _contract.getPastEvents(_monitorParameter.eventName, _monitorParameter.web3jsParameters);
    }

    /**
     * Check if {_contract} has a event named {_eventName}. If not, throws an exception
     * If exists, create a instance of BehaviorSubject at this._eventListeners[_eventName]
     *
     * @param _contract Contract evaluated
     * @param _eventName Name of the event
     * @param _filter Optional filter that may be used as index along with _eventName
     *
     * @returns The key of BehaviorSubject
     */
    private _validateEventAndInstanceSubject(
        _contract: Contract,
        _eventName: string,
        _filter?: { [key: string]: any }
    ): { new: boolean; key: string } {
        if (!_contract.events[_eventName]) {
            throw new Error(`Event '${_eventName}' does not exists in the contract`);
        } else {
            let _new = false;
            const _key = _filter ? _eventName.concat(JSON.stringify(_filter)) : _eventName;
            if (!this._eventListeners[_key]) {
                this._eventListeners[_key] = new BehaviorSubject<any>(null);
                _new = true;
            }
            return { new: _new, key: _key };
        }
    }

    /**
     * Execute a CALL (DOEST NOT change state) to a function  from the currentAccount selected on the wallet provider
     *
     * @param _abi  Contract's ABI
     * @param _functionName Name of contract's function to be invoked
     * @param _args Contract`s function arguments
     * @returns Observable<TransactionResult<T>>
     */
    protected call<T>(_abi: AbiItem[], _functionName: string, ..._args: any): Observable<TransactionResult<T>> {
        return this.callPrivate(_abi, _functionName, this.justReturnV, ..._args);
    }

    /**
     * Execute a CALL (DOEST NOT change state) to a function  from the currentAccount selected on the wallet provider
     * This function makes the same as call<T> and converts the result to type {BN}, since the provider returns string
     *
     * @param _abi  Contract's ABI
     * @param _functionName Name of contract's function to be invoked
     * @param _args Contract`s function arguments
     * @returns Observable<TransactionResult<T>>
     */
    protected callBN(_abi: AbiItem[], _functionName: string, ..._args: any): Observable<TransactionResult<BN>> {
        return this.callPrivate(
            _abi,
            _functionName,
            (v: any) => {
                return new BN(v);
            },
            ..._args
        );
    }

    /**
     * Execute a SEND (change state) to a function  from the currentAccount selected on the wallet provider
     *
     * @param _abi  Contract's ABI
     * @param _functionName Name of contract's function to be invoked
     * @param _successMessage Message to be sent in the Observable in case of successfully transaction sent
     * @param _callback Function to be called when the transaction is confirmed
     * @param _confirmationMessage Message to be sent in the callback function when transaction confirmed by the network
     * @param _args Contract`s function arguments
     * @returns Observable<TransactionResult>
     */
    protected send(
        _abi: AbiItem[],
        _functionName: string,
        _successMessage: string,
        _callback?: CallbackFunction,
        _confirmationMessage?: string,
        ..._args: any
    ): Observable<TransactionResult<string>> {
        return new Observable<TransactionResult<string>>((subscriber) => {
            this.getContract(_abi as AbiItem[]).then((_contract) => {
                let result;
                this._web3Service.getUserAccountAddressSubject().subscribe(async (fromAccount) => {
                    try {
                        result = await _contract.methods[_functionName](..._args)
                            .send({
                                from: fromAccount,
                            })
                            .on(`transactionHash`, (hash: string) => {
                                subscriber.next({ success: true, result: _successMessage });
                            })
                            .once(`confirmation`, (confNumber: number, receipt: any, latestBlockHash: string) => {
                                if (_callback)
                                    _callback({
                                        success: true,
                                        result: _confirmationMessage || ``,
                                    });
                            });
                    } catch (e: any) {
                        const providerError = ProviderErrors[e.code];
                        console.log(e.message);
                        let message = `We had some problem. The transaction wasn't sent.`;
                        if (providerError) {
                            message = `${providerError.title}: ${providerError.message}. The transaction wasn't sent.`;
                        }
                        console.warn(e);
                        if (_callback) {
                            _callback({
                                success: false,
                                result: message,
                            });
                        } else {
                            subscriber.next({
                                success: false,
                                result: message,
                            });
                        }
                    }
                });
            });
        });
    }

    /**
     * Calls the GET function of the contract with the name {_propertyName}
     * @param _abi Contract's ABI
     * @param _propertyName name of the property of type string
     */
    protected getString(_abi: AbiItem[], _propertyName: string): Promise<string> {
        return this.getProperty(_abi, _propertyName);
    }

    /**
     * Calls the GET function of the contract with the name {_propertyName}
     * @param _abi Contract's ABI
     * @param _propertyName name of the property of type string[]
     */
    protected getStringArray(_abi: AbiItem[], _propertyName: string): Promise<string[]> {
        return this.getProperty(_abi, _propertyName);
    }

    /**
     * Calls the GET function of the contract with the name {_propertyName}
     * @param _abi Contract's ABI
     * @param _propertyName name of the property of type boolean
     */
    protected async getBoolean(_abi: AbiItem[], _propertyName: string): Promise<boolean> {
        return this.getProperty(_abi, _propertyName);
    }

    /**
     * Calls the GET function of the contract with the name {_propertyName}
     * @param _propertyName name of the property of type number
     */
    protected getNumber(_abi: AbiItem[], _propertyName: string): Promise<number> {
        return this.getProperty(_abi, _propertyName);
    }

    /**
     * Calls the GET function of the contract with the name {_propertyName}
     * @param _propertyName name of the property of type BN (BigNumber)
     */
    protected getBN(_abi: AbiItem[], _propertyName: string): Promise<BN> {
        return this.getProperty(_abi, _propertyName);
    }

    /**
     * Calls the GET function of the contract with the name {_propertyName}
     *
     * @param _abi Contract's ABI
     * @param _propertyName name of the property of type string
     * @param _subscriber Instance of the subscriber that will receive the result
     */
    protected async getProperty(_abi: AbiItem[], _propertyName: string): Promise<any> {
        try {
            const _contract = await this.getContract(_abi);
            // If not passing 'from', the msg.sender is 0x0 at the contract's function
            // This was detected when testing the 'canClose()' function, a kind of getter
            // where we needed to validate the msg.sender
            const _result = await _contract.methods[_propertyName]().call({
                from: this._fromAccount,
            });
            return _result;
        } catch (e: any) {
            console.error(e);
            this._messageService.showMessageAlert("Error", `Unexpected exception when fetching '${_propertyName}': ${e.message}`);
        }
    }

    /**
     * Just return the value received. It is used by callPrivate as default
     * @param v value to be received and to be returned
     * @returns
     */
    private justReturnV(v: any) {
        return v;
    }

    /**
     * Execute a CALL (DOEST NOT change state) to a function  from the currentAccount selected on the wallet provider
     *
     * @param _abi  Contract's ABI
     * @param _functionName Name of contract's function to be invoked
     * @param _args Contract`s function arguments
     * @returns Observable<TransactionResult<T>>
     */
    private callPrivate<T>(
        _abi: AbiItem[],
        _functionName: string,
        transform: Function = this.justReturnV,
        ..._args: any
    ): Observable<TransactionResult<T>> {
        return new Observable<TransactionResult<T>>((subscriber) => {
            this.getContract(_abi as AbiItem[]).then((_contract) => {
                let result;
                this._web3Service.getUserAccountAddressSubject().subscribe(async (fromAccount) => {
                    try {
                        result = await _contract.methods[_functionName](..._args).call({
                            from: fromAccount,
                        });
                        subscriber.next({
                            success: true,
                            result: transform(result),
                        });
                    } catch (e: any) {
                        const providerError = ProviderErrors[e.code];
                        let message = `We had some problem. The transaction wasn't sent.`;
                        if (providerError) {
                            message = `${providerError.title}: ${providerError.message}. The transaction wasn't sent.`;
                        }
                        console.warn(e);
                        subscriber.next({
                            success: false,
                            result: message,
                        });
                    }
                });
            });
        });
    }
}
