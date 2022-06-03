export interface TransactionResult<T> {
  success: boolean;
  result: T | string;
}
