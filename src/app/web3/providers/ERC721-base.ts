import BN from 'bn.js';
import {  BigNumber, Bytes, ContractInterface } from 'ethers';
import { Observable, Subject, Subscription } from 'rxjs';
import { GlobalAlertService } from '../global-alert.service';
import { TransactionResult, CallbackFunction, ProviderErrors } from '../model';
import { WalletProviderService } from './wallet-provider.service';
 import { TransactionResponse } from '@ethersproject/abstract-provider';

import { BaseContract } from './base-contract.service';
 

/**
 * Base contract to interact with ERC-721 smart contracts
 */
export abstract class ERC721BaseContract
  extends BaseContract 
{
  protected _symbol!: string;
  private _subscriptionSymbol: Subscription;
  protected _tokenURI!: string;

  constructor(
    _loggingService: GlobalAlertService,
    _web3Service: WalletProviderService,
    _address: string
  ) {
    super(_loggingService, _web3Service, _address);
    // Quando instanciar um serviço para interagir com um ERC-721,
    // já faz uma chamada ao método  `symbol()` para
    // buscar esse informação e armazenar na classe
    this._subscriptionSymbol = this.symbol().subscribe((result) => {
      this._subscriptionSymbol.unsubscribe();
    });
  }

  /**
   * @returns Returns TRUE if the current interface is
   * compatible with the erc number passed as parameter
   */
  isERC(erc: number): boolean {
    return [721].includes(erc);
  }

  /**
   * @returns Returns descriptive name for a collection of NFTs in this contract
   */
  name(): Observable<TransactionResult<string>> {
    return this.call(this.getContractABI(), `name`);
  }

  /**
   * @returns Returns An abbreviated name for NFTs in this contract
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
   * Fetch a distinct Uniform Resource Identifier (URI) for a given asset.
   *
   * @param _tokenId The identifier for an NFT
   *
   * @returns the URI may point to a JSON file that conforms to the "ERC721  Metadata JSON Schema".
   */
  tokenURI(_tokenId: number): Observable<TransactionResult<string>> {
    if (this._tokenURI) {
      return new Observable<TransactionResult<string>>((subscriber) => {
        subscriber.next({ success: true, result: this._tokenURI });
      });
    } else {
      // Como nós queremos que o resultado da chamada o `this.call` seja
      // retornado para quem chamou esse método `tokenURI()` mas também
      // seja utilizado aqui para atribuí-lo à propriedade `_tokenURI`, criamos
      // um Subject, que é ao mesmo tempo Observable e Observer.
      //
      // Com esse Subject, subscreve-se no Observable retornado pelo `this.call`.
      const subject = new Subject<TransactionResult<unknown>>();
      this.call(this.getContractABI(), `tokenURI`, _tokenId).subscribe(subject);
      // subscreve uma função neste mesmo subject (já Subjects também são Observables) para
      // atualizar o valor da propriedade `_tokenURI`
      const subscription = subject.subscribe((result) => {
        if (result.success) {
          this._tokenURI = result.result as string;
          subscription.unsubscribe();
        }
      });
      // retorna o subject para o caller deste método
      return subject.asObservable() as Observable<TransactionResult<string>>;
    }
  }

  /**
   * Count NFTs tracked by this contract
   *
   * @returns Returns the totalSupply of the token
   */
  totalSupply(): Observable<TransactionResult<string>> {
    return this.call(this.getContractABI(), `totalSupply`);
  }

  /**
   * Count all NFTs assigned to an owner
   *
   * @param _owner account address which balance is asked
   * @returns The number of NFTs owned by `_owner`, possibly zero
   */
  balanceOf(_owner: string): Observable<TransactionResult<BigNumber>> {
    return this.call(this.getContractABI(), `balanceOf`, _owner);
  }

  /**
   *  Find the owner of an NFT
   *
   * @param _tokenId  The identifier for an NFT
   * @returns The address of the owner of the NFT
   */
  ownerOf(_tokenId: number): Observable<TransactionResult<string>> {
    return this.call(this.getContractABI(), `ownerOf`, _tokenId);
  }

  /**
   * Get the approved address for a single NFT
   *
   * @param _tokenId  The NFT to find the approved address for
   *
   * @returns The approved address for this NFT, or the zero address if there is none
   */
  getApproved(_tokenId: BigNumber): Observable<TransactionResult<string>> {
    return this.call(this.getContractABI(), `getApproved`, _tokenId);
  }

  /**
   * Transfers the ownership of an NFT from one address to another address
   *
   * @param _from The current owner of the NFT
   * @param _to The new owner
   * @param _tokenId  The NFT to transfer
   * @param data  Additional data with no specified format, sent in call to `_to`
   * @param _callback  Function to be called when the transaction is confirmed
   * @returns
   */
  safeTransferFrom(
    _from: string,
    _to: string,
    _tokenId: BigNumber | BN,
    _data: Bytes,
    _callback?: CallbackFunction
  ): Observable<TransactionResult<string>> {
    const successSentMessage = `Transaction to tranfer ${
      this._symbol
    } NFT ${_tokenId.toString()} to ${_to} was sent successfully`;
    const successConfirmationMessage = `Transaction to tranfer ${
      this._symbol
    } NFT ${_tokenId.toString()} to ${_to} was confirmed`;
    return this.send(
      this.getContractABI(),
      'safeTransferFrom',
      successSentMessage,
      _callback,
      successConfirmationMessage,
      _from,
      _to,
      _tokenId,
      _data
    );
  }

  /**
   * Enable or disable approval for a third party ("operator") to manage
   *  all of `msg.sender`'s assets
   *
   * @param _operator Address to add to the set of authorized operators
   * @param _approved True if the operator is approved, false to revoke approval
   * @param _callback  Function to be called when the transaction is confirmed
   */
  setApprovalForAll(
    _operator: string,
    _approved: boolean,
    _callback?: CallbackFunction | undefined
  ): Observable<TransactionResult<string>> {
    const action = _approved ? 'set approval for' : 'revoke approval from';
    const successSentMessage = `Transaction to ${action} all ${this._symbol} NFTs to ${_operator} was sent successfully`;
    const successConfirmationMessage = `Transaction to ${action} all ${this._symbol} NFTs to ${_operator} was confirmed`;
    return this.send(
      this.getContractABI(),
      'setApprovalForAll',
      successSentMessage,
      _callback,
      successConfirmationMessage,
      _operator,
      _approved
    );
  }

  /**
   *  Query if an address is an authorized operator for another address
   *
   * @param _owner The address that owns the NFTs
   * @param _operator The address that acts on behalf of the owner
   * @returns True if `_operator` is an approved operator for `_owner`, false otherwise
   */
  isApprovedForAll(
    _owner: string,
    _operator: string
  ): Observable<TransactionResult<boolean>> {
    return this.call(
      this.getContractABI(),
      `isApprovedForAll`,
      _owner,
      _operator
    );
  }

  /**
   * Query if a contract implements an interface
   *
   * @param interfaceID The interface identifier, as specified in ERC-165
   * @returns `true` if the contract implements `interfaceID` and`interfaceID`
   * is not 0xffffffff, `false` otherwise
   */
  supportsInterface(
    interfaceID: Bytes
  ): Observable<TransactionResult<boolean>> {
    return this.call(this.getContractABI(), `supportsInterface`, interfaceID);
  }

  /**
   * Enumerate valid NFTs. Throws if `_index` >= `totalSupply()`.
   *
   * @param _index _index A counter less than `totalSupply()`
   * @returns The token identifier for the `_index`th NFT
   */
  tokenByIndex(_index: BigNumber): Observable<TransactionResult<BigNumber>> {
    return this.call(this.getContractABI(), `tokenByIndex`, _index);
  }

  /**
   * Enumerate NFTs assigned to an owner.  Throws if `_index` >= `balanceOf(_owner)` or
   * if `_owner` is the zero address, representing invalid NFTs.
   *
   * @param _owner An address where we are interested in NFTs owned by them
   * @param _index A counter less than `balanceOf(_owner)`
   * @returns The token identifier for the `_index`th NFT assigned to `_owner`,
   */
  tokenOfOwnerByIndex(
    _owner: string,
    _index: BigNumber
  ): Observable<TransactionResult<BigNumber>> {
    return this.call(
      this.getContractABI(),
      `tokenOfOwnerByIndex`,
      _owner,
      _index
    );
  }

  /**
   * Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE TO CONFIRM THAT `_to`
   * IS CAPABLE OF RECEIVING NFTS OR ELSE THEY MAY BE PERMANENTLY LOST
   *
   * @param _from The current owner of the NFT
   * @param _to The new owner
   * @param _tokenId The NFT to transfer
   * @param _callback  Function to be called when the transaction is confirmed
   * @returns
   */
  transferFrom(
    _from: string,
    _to: string,
    _tokenId: BigNumber,
    _callback?: CallbackFunction
  ): Observable<TransactionResult<string>> {
    const successSentMessage = `Transaction to tranfer ${
      this._symbol
    } NFT ${_tokenId.toString()} to ${_to} was sent successfully`;
    const successConfirmationMessage = `Transaction to tranfer ${
      this._symbol
    } NFT ${_tokenId.toString()} to ${_to} was confirmed`;
    return this.send(
      this.getContractABI(),
      'transferFrom',
      successSentMessage,
      _callback,
      successConfirmationMessage,
      _from,
      _to,
      _tokenId
    );
  }

  /**
   * Change or reaffirm the approved address for an NFT
   *
   * @param _approved The new approved NFT controller
   * @param _tokenId The NFT to approve
   * @param _callback  Function to be called when the transaction is confirmed
   * @returns
   */
  approve(
    _approved: string,
    _tokenId: BigNumber,
    _callback?: CallbackFunction
  ): Observable<TransactionResult<string>> {
    return this.send(
      this.getContractABI(),
      'approve',
      `Transaction to approve ${_approved} as controller of ${this._symbol} NFT ${_tokenId} was sent successfully`,
      _callback,
      `Transaction to approve ${_approved} as controller of ${this._symbol} NFT ${_tokenId} was confirmed`,
      _approved,
      _tokenId
    );
  }
}
