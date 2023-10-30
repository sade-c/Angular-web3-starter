/**
 * This method uses for converting chainId as a number to 0x-prefixed hexadecimal string. <br>
 * {@link W3S_CHAIN_ID} - Already converted Chains. <br>
 * @param chainId - chainId as number. <br>
 * You can use {@link W3S_CHAIN_ID_NUM} or your specific value.
 */

export function w3sConvertChainIdToHex(chainId: number | string): string {
  if (!chainId && chainId !== 0 && chainId !== '0') {
    return null;
  }

  const chain = parseInt(chainId.toString(), 10);

  return `0x${chain.toString(16)}`;
}
