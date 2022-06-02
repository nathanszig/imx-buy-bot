import {AlchemyProvider} from '@ethersproject/providers';
import axios from 'axios/index';
import {Wallet} from '@ethersproject/wallet';
import {ERC721TokenType, ETHTokenType, ImmutableXClient} from "@imtbl/imx-sdk";
import {ImmutableMethodParams} from "@imtbl/imx-sdk/dist/src/types";
import {BigNumber} from "@ethersproject/bignumber";

const provider = new AlchemyProvider('mainnet', '0BZjuaH8NIoewLDSzZRTiRPav7IhD8rT');

(async (): Promise<void> => {
    const privateKey = 'b308b359c28af946492378c7e8e86e83777b4382ec553ec64ffeaac8e9a153a6'
    const publicKey = '0x42b40a7448251F4AB31b4854bb7146E80fdf1574'

    const signer = new Wallet(privateKey).connect(provider)

    const user = await ImmutableXClient.build({
        publicApiUrl: 'https://api.x.immutable.com/v1',
        starkContractAddress: '0x5FDCCA53617f4d2b9134B29090C87D01058e27e9',
        registrationContractAddress: '0x72a06bf2a1CE5e39cBA06c0CAb824960B587d64c',
        signer: signer,
    });

    process.exit(0)

    /*
    const data = {
        "user": publicKey,
        "token_sell": {
            "type": "ETH",
            "data": {
                "decimals": 18
            }
        },
        "amount_sell": price.toString(),
        "token_buy": {
            "type": "ERC721",
            "data": {
                "token_id": tokenId,
                "token_address": '0x9e0d99b864e1ac12565125c5a82b59adea5a09cd'
            }
        },
        "amount_buy": "1",
        "include_fees": true
    }

    await axios.post('https://api.x.immutable.com/v1/signable-order-details', data)
        .then(response => {
            /*
            const payload: ImmutableMethodParams.ImmutableGetSignableTradeParamsTS = {
                user: publicKey,
                amountBuy: BigNumber.from('1'),
                amountSell: BigNumber.from(price.toString()),
                include_fees: true,
                orderId: orderId,
                expiration_timestamp: response.data.expiration_timestamp,
                tokenBuy: {
                    type: ERC721TokenType.ERC721,
                    data: {
                        tokenId: tokenId,
                        tokenAddress: addressContract
                    }
                },
                tokenSell: {
                    type: ETHTokenType.ETH,
                    data: {
                        decimals: 18
                    }
                }
            };

            user.createTrade(payload).then(result => {
                console.log(JSON.stringify({result: 'OK', trade_id: result.trade_id}));
                process.exit(0);
            })
        }).catch(error => {
            console.log(JSON.stringify({result: 'KO', error: error.message}));
            process.exit(1);
        });
    */
})().catch(e => {
    console.log(JSON.stringify({result: 'KO', error: e}));
    process.exit(1);
});