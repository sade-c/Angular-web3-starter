/**
 * Provider errors as EIP-1193
 * https://eips.ethereum.org/EIPS/eip-1193
 */

export const ProviderErrors: {
  [code: string]: { title: string; message: string };
} = {
  '-32700': {
    title: 'JSON RPC 2.0',
    message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
  },
  '-32600': {
    title: 'JSON RPC 2.0',
    message: 'The JSON sent is not a valid Request object.',
  },
  '-32601': {
    title: 'JSON RPC 2.0',
    message: 'The method does not exist / is not available.',
  },
  '-32602': {
    title: 'JSON RPC 2.0',
    message: 'Invalid method parameter(s).',
  },
  '-32603': {
    title: 'JSON RPC 2.0',
    message: 'Internal JSON-RPC error.',
  },
  '-32000': {
    title: 'EIP-1474',
    message: 'Invalid input.',
  },
  '-32001': {
    title: 'EIP-1474',
    message: 'Resource not found.',
  },
  '-32002': {
    title: 'EIP-1474',
    message: 'Resource unavailable.',
  },
  '-32003': {
    title: 'EIP-1474',
    message: 'Transaction rejected.',
  },
  '-32004': {
    title: 'EIP-1474',
    message: 'Method not supported.',
  },
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
