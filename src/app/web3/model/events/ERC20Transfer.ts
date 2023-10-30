import BN from 'bn.js';

export interface ERC20Transfer {
  from: string;
  to: string;
  value: BN;
}