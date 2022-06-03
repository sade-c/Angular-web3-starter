/**
 * Provider errors as EIP-1193
 * https://eips.ethereum.org/EIPS/eip-1193
 */

export const ProviderErrors: {
  [code: string]: { title: string; message: string };
} = {
  '4001': {
    title: 'User Rejected',
    message: 'The user rejected the request',
  },
  '4100': {
    title: 'Unauthorized',
    message:
      'The requested method and/or account has not been authorized by the user',
  },
  '4200': {
    title: 'Unsupported Method',
    message: 'The Provider does not support the requested method',
  },
  '4900': {
    title: 'Disconnected',
    message: 'The Provider is disconnected from all chains',
  },
  '4901': {
    title: 'Chain Disconnected',
    message: '	The Provider is not connected to the requested chain',
  },
};
