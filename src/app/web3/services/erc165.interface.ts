import { Bytes } from 'ethers';
import { Observable } from 'rxjs';
import { TransactionResult } from '../model';

export interface IERC165 {
  /**
   * Query if a contract implements an interface
   *
   * @param interfaceID The interface identifier, as specified in ERC-165
   * @returns `true` if the contract implements `interfaceID` and`interfaceID`
   * is not 0xffffffff, `false` otherwise
   */
  supportsInterface(interfaceID: Bytes): Observable<TransactionResult<boolean>>;
}
