import BN from 'bn.js';
import { BigNumber, Bytes } from 'ethers';
import { Observable } from 'rxjs';
import { CallbackFunction } from '../model/CallbackFunction';
import { TransactionResult } from '../model/transaction-result.interface';
import { IERC } from './erc.interface';
import { IERC165 } from './erc165.interface';
import { IERC721Enumerable } from './erc721Enumerable.interface';
import { IERC721Metadata } from './erc721Metadata.interface';

export interface IERC721
  extends IERC,
    IERC165,
    IERC721Metadata,
    IERC721Enumerable {
  /**
   * Count all NFTs assigned to an owner
   *
   * @param _owner account address which balance is asked
   * @returns The number of NFTs owned by `_owner`, possibly zero
   */
  balanceOf(_owner: string): Observable<TransactionResult<BigNumber | BN>>;

  /**
   *  Find the owner of an NFT
   *
   * @param _tokenId  The identifier for an NFT
   * @returns The address of the owner of the NFT
   */
  ownerOf(_tokenId: number): Observable<TransactionResult<string>>;

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
    data: Bytes,
    _callback?: CallbackFunction
  ): Observable<TransactionResult<string>>;

  /**
   * Transfers the ownership of an NFT from one address to another address.
   * THE CALLER IS RESPONSIBLE TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING
   * NFTS OR ELSE THEY MAY BE PERMANENTLY LOST
   *
   * @param _from The current owner of the NFT
   * @param _to The new owner
   * @param _tokenId  The NFT to transfer
   * @param _callback  Function to be called when the transaction is confirmed
   * @returns
   */
  transferFrom(
    _from: string,
    _to: string,
    _tokenId: BigNumber | BN,
    _callback?: CallbackFunction
  ): Observable<TransactionResult<string>>;

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
    _tokenId: BigNumber | BN,
    _callback?: CallbackFunction
  ): Observable<TransactionResult<string>>;

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
    _callback?: CallbackFunction
  ): Observable<TransactionResult<string>>;

  /**
   * Get the approved address for a single NFT
   *
   * @param _tokenId The NFT to find the approved address for
   * @returns The approved address for this NFT, or the zero address if there is none
   */
  getApproved(_tokenId: BigNumber | BN): Observable<TransactionResult<string>>;

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
  ): Observable<TransactionResult<boolean>>;
}
