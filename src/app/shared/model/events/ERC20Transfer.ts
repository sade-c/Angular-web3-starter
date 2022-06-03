import { BigNumber } from 'ethers'

export interface ERC20Transfer {
  from: string;
  to: string;
  value: BigNumber;
}
