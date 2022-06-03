export interface NetworkParams {
    chainId: string
    chainName: string
    nativeCurrency: {
        name: string
        symbol: string
        decimals: number
        image?: string
    },
    rpcUrls: string[],
    blockExplorerUrls: string[]
}
