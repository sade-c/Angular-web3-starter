import BN from 'bn.js';
import { Observable, Subject, Subscription } from 'rxjs';
import Web3 from 'web3';
import { GlobalAlertService } from '../global-alert.service';
 import { CallbackFunction, TransactionResult } from '../model';
import { BaseContract } from './base-contract.service';
import { WalletProviderService } from './wallet-provider.service';
  
/**
 * Base contract to interact with ERC-20 smart contracts
 */
export abstract class ERC20BaseContract extends BaseContract {
  protected _symbol!: string;
  private _subscriptionSymbol: Subscription;

  constructor(
    _loggingService: GlobalAlertService,
    _web3Service: WalletProviderService,
    _address: string
  ) {

    console.log("addres for usdc",_address);
    super(_loggingService, _web3Service, _address);
    // Quando instanciar um serviço para interagir com um ERC-20,
    // já faz uma chamada ao método  `symbol()` para buscar
    // esse informação e armazenar em _symbol
    this._subscriptionSymbol = this.symbol().subscribe((result) => {
      this._subscriptionSymbol.unsubscribe();
    });
  }

  /**
   * @returns Returns the name of the token
   */
  name(): Observable<TransactionResult<string>> {
    return this.call(this.getContractABI(), `name`);
  }

  /**
   * @returns Returns the symbol of the token
   */
  symbol(): Observable<TransactionResult<string>> {
    if (this._symbol) {
      return new Observable<TransactionResult<string>>((subscriber) => {
        subscriber.next({ success: true, result: this._symbol });
      });
    } else {
      // Como nós queremos que o resultado da chamada o `this.call` seja
      // retornado para quem chamou esse método `symbol()` mas também
      // seja utilizado aqui para atribuí-lo à propriedade `_symbol`, criamos
      // um Subject, que é ao mesmo tempo Observable e Observer.
      //
      // Com esse Subject, subscreve-se no Observable retornado pelo `this.call`.
      const subject = new Subject<TransactionResult<unknown>>();
      this.call(this.getContractABI(), `symbol`).subscribe(subject);
      // subscreve uma função neste mesmo subject (já Subjects também são Observables) para
      // atualizar o valor da propriedade `_symbol`
      const subscription = subject.subscribe((result) => {
        if (result.success) {
          this._symbol = result.result as string;
          subscription.unsubscribe();
        }
      });
      // retorna o subject para o caller deste método
      return subject.asObservable() as Observable<TransactionResult<string>>;
    }
  }

  /**
   * @returns Returns the decimals of the token
   */
  decimals(): Observable<TransactionResult<string>> {
    return this.call(this.getContractABI(), `decimals`);
  }

  /**
   * @returns Returns the totalSupply of the token
   */
  totalSupply(): Observable<TransactionResult<string>> {
    return this.call(this.getContractABI(), `totalSupply`);
  }

  /**
   * Returns the account balance of another account with address _owner
   * @param _owner account address which balance is asked
   * @returns _owners balance
   */
  balanceOf(_owner: string): Observable<TransactionResult<BN>> {
    return this.callBN(this.getContractABI(), `balanceOf`, _owner);
  }

  /**
   * Returns the amount which {_spender} is still allowed to withdraw from {_owner}.
   *
   * @param _owner account address owner of tokens and who authorized the spender spends
   * @param _spender account address authorized to spend tokens of {_owner}
   * @returns ammount of owner's tokens allowed to be spent by {_spender}
   */
  allowance(
    _owner: string,
    _spender: string
  ): Observable<TransactionResult<BN>> {
    return this.callBN(this.getContractABI(), `allowance`, _owner, _spender);
  }

  /**
   * Transfers {_value} amount of tokens to address {_to}
   *
   * @param _to destination account
   * @param _value quantity of tokens to be transfered
   * @param _callback  Function to be called when the transaction is confirmed
   * @returns
   */
  transfer(
    _to: string,
    _value: any,
    _callback?: CallbackFunction
  ): Observable<TransactionResult<string>> { 

    const successSentMessage = `Transaction to tranfer ${_value.toString()} ${
      this._symbol
    }  to ${_to} was sent successfully`;
    const successConfirmationMessage = `Transaction to tranfer ${_value.toString()} ${
      this._symbol
    }  to ${_to} was confirmed`;
    return this.send(
      this.getContractABI(),
      'transfer',
      successSentMessage,
      _callback,
      successConfirmationMessage,
      _to,
      Web3.utils.toWei(_value, 'ether')// to ether type 

       
    );
  }

  /**
   * Transfers {_value} amount of tokens  from address {_from} to address {_to}
   *
   * @param _to destination account
   * @param _value quantity of tokens to be transfered
   * @param _callback  Function to be called when the transaction is confirmed
   * @returns
   */
  transferFrom(
    _from: string,
    _to: string,
    _value: BN,
    _callback?: CallbackFunction
  ): Observable<TransactionResult<string>> {
    const successSentMessage = `Transaction to tranfer ${_value.toString()} ${
      this._symbol
    } from ${_from} to ${_to} was sent successfully`;
    const successConfirmationMessage = `Transaction to tranfer ${_value.toString()} ${
      this._symbol
    }  from ${_from} to ${_to} was confirmed`;
    return this.send(
      this.getContractABI(),
      'transferFrom',
      successSentMessage,
      _callback,
      successConfirmationMessage,
      _from,
      _to,
      _value
    );
  }

  /**
   * Allows {_spender} to withdraw from your account multiple times, up to the {_value} amount.
   * If this function is called again it overwrites the current allowance with _value.
   *
   * @param _spender account authorized to spend up to {_value} tokens
   * @param _value quantity of tokens to be approved to be spent by {_spender}
   * @param _callback  Function to be called when the transaction is confirmed
   * @returns
   */
  approve(
    _spender: string,
    _value: BN,
    _callback?: CallbackFunction
  ): Observable<TransactionResult<string>> {
    return this.send(
      this.getContractABI(),
      'approve',
      `Transaction to approve allowance of ${_value} ${this._symbol} to ${_spender} was sent successfully`,
      _callback,
      `Transaction to approve allowance of ${_value} ${this._symbol} to ${_spender} was confirmed`,
      _spender,
      _value
    );
  }
}
