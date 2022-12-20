import { HashPair } from "../models/CryptoModel";
import BaseEvmService from "./BaseEvmService";
/**
 * Base class for HTLC operations on each EVM
 */
declare class _PolygonErc721HtlcService extends BaseEvmService {
    static readonly provider = "https://rpc-mumbai.maticvigil.com";
    static readonly contractAddress = "0x6003028E5C3FB11c5F002902dDa1E18cF6a5D34B";
    constructor(provider?: string, contractAddress?: string);
    /**
     * Issue HTLC and obtain the key at the time of issue
     */
    mint(recipientAddress: string, senderAddress: string, lockSeconds: number, tokenAddress: string, tokenId: number, gasLimit: number): Promise<[string, HashPair]>;
    /**
     * Receive tokens stored under the key at the time of HTLC generation
     */
    withDraw(contractId: string, senderAddress: string, secret: string, gasLimit: number): Promise<string>;
}
export default _PolygonErc721HtlcService;
