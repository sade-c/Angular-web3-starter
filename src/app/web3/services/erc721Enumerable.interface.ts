import BN from 'bn.js';
import { BigNumber } from 'ethers';
import { Observable } from 'rxjs';
import { TransactionResult } from '../model/transaction-result.interface';

export interface IERC721Enumerable {
  /**
   * Count NFTs tracked by this contract
   *
   * @returns Returns the totalSupply of the token
   */
  totalSupply(): Observable<TransactionResult<string>>;

  /**
   * Enumerate valid NFTs. Throws if `_index` >= `totalSupply()`.
   *
   * @param _index _index A counter less than `totalSupply()`
   * @returns The token identifier for the `_index`th NFT
   */
  tokenByIndex(
    _index: BigNumber | BN
  ): Observable<TransactionResult<BigNumber | BN>>;

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
    _index: BigNumber | BN
  ): Observable<TransactionResult<BigNumber | BN>>;
}
