import BN from 'bn.js';
import { BigNumber } from 'ethers';
import { Observable } from 'rxjs';
import { CallbackFunction } from '../model/CallbackFunction';
import { TransactionResult } from '../model/transaction-result.interface';
import { IERC } from './erc.interface';

export interface IERC20 extends IERC {
  /**
   * @returns Returns the name of the token
   */
  name(): Observable<TransactionResult<string>>;

  /**
   * @returns Returns the symbol of the token
   */
  symbol(): Observable<TransactionResult<string>>;
  /**
   * @returns Returns the decimals of the token
   */
  decimals(): Observable<TransactionResult<string>>;

  /**
   * @returns Returns the totalSupply of the token
   */
  totalSupply(): Observable<TransactionResult<string>>;

  /**
   * Returns the account balance of another account with address _owner
   * @param _owner account address which balance is asked
   * @returns _owners balance
   */
  balanceOf(_owner: string): Observable<TransactionResult<BigNumber | BN>>;

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
  ): Observable<TransactionResult<BigNumber | BN>>;

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
    _value: BigNumber | BN,
    _callback?: CallbackFunction
  ): Observable<TransactionResult<string>>;

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
    _value: BigNumber | BN,
    _callback?: CallbackFunction
  ): Observable<TransactionResult<string>>;
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
    _value: BigNumber | BN,
    _callback?: CallbackFunction
  ): Observable<TransactionResult<string>>;
}
