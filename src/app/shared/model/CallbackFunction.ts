import { TransactionResult } from './transaction-result.interface';

export type CallbackFunction = (param: TransactionResult<string>) => void;
