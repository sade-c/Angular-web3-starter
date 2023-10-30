import BN from 'bn.js';
import { BigNumber, Bytes } from 'ethers';
import { Observable } from 'rxjs';
import { TransactionResult } from '../model/transaction-result.interface';
import { IERC721 } from './erc721.interface';

/**
 * A wallet/broker/auction application MUST implement the wallet interface if it will accept safe transfers.
 */
export interface IERC721TokenReceiver {
  /**
   * Handle the receipt of an NFT. The ERC721 smart contract calls this function on the recipient
   *  after a `transfer`. This function MAY throw to revert and reject the transfer. Return of
   * other than the magic value MUST result in the transaction being reverted.
   *
   * @param _operator The address which called `safeTransferFrom` function
   * @param _from The address which previously owned the token
   * @param _tokenId The NFT identifier which is being transferred
   * @param _data Additional data with no specified format
   *
   * @returns `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))` unless throwing
   */
  onERC721Received(
    _operator: string,
    _from: string,
    _tokenId: BigNumber | BN,
    _data: Bytes
  ): Observable<TransactionResult<BigNumber | BN>>;
}
