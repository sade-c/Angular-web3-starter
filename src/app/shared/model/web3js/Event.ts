/**
 * @notice Event returned from web3
 * https://web3js.readthedocs.io/en/v1.2.0/web3-eth-contract.html#contract-events-return
 */
export interface Web3Event {
  event: string;
  signature: string | null;
  address: string;
  returnValues: any;
  logIndex: number;
  transactionIndex: number;
  transactionHash: string;
  blockHash: string;
  blockNumber: number;
}
