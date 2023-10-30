import { Observable } from 'rxjs';
import { TransactionResult } from '../model/transaction-result.interface';

export interface IERC721Metadata {
  /**
   * @returns Returns descriptive name for a collection of NFTs in this contract
   */
  name(): Observable<TransactionResult<string>>;

  /**
   * @returns Returns An abbreviated name for NFTs in this contract
   */
  symbol(): Observable<TransactionResult<string>>;

  /**
   * Fetch a distinct Uniform Resource Identifier (URI) for a given asset.
   *
   * @param _tokenId The identifier for an NFT
   *
   * @returns the URI may point to a JSON file that conforms to the "ERC721  Metadata JSON Schema".
   */
  tokenURI(_tokenId: number): Observable<TransactionResult<string>>;
}
