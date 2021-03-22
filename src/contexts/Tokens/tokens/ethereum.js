import config from '../../../config/index.js'
import {ETH_MAIN_CHAINID, ETH_TEST_CHAINID} from '../../../config/coinbase/nodeConfig'
import {
  NAME,
  SYMBOL,
  DECIMALS,
  EXCHANGE_ADDRESS,
  REDEEM_MAX_NUM,
  REDEEM_MIN_NUM,
  FEE,
  MAXFEE,
  MINFEE,
  ISSWITCH,
  ISDEPOSIT,
  ISREDEEM,
  DEPOSIT_ADDRESS,
  DEPOSIT_TYPE,
  DEPOSIT_MAX_NUM,
  DEPOSIT_MIN_NUM,
  EXTENDOBJ,
} from '../methods/mode'
import {dirSwitch} from '../methods/common'

export default {
  [ETH_MAIN_CHAINID]: {
    '0xf99d58e463a2e07e5692127302c20a191861b4d6': { // ANY
      [NAME]: 'Anyswap' + config.suffix,
      [SYMBOL]: 'ANY',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xd1D0C2f4291F7002E1591d2a87975f0701a3fa2C',
      [REDEEM_MAX_NUM]: 2000000,
      [REDEEM_MIN_NUM]: 40,
      [FEE]: 0.001,
      [MAXFEE]: 50,
      [MINFEE]: 20,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x4464FC279180045b1F57beACFa0D82e9Cd4235Cd',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 2000000,
      [DEPOSIT_MIN_NUM]: 10,
      [EXTENDOBJ]: {
        BRIDGE: [
          { type: 32659, isSwitch: 1 }
        ],
        VERSION: 'V2'
      },
    },
    // '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': { // WBTC
    //   [NAME]: 'Wrapped BTC',
    //   [SYMBOL]: 'WBTC',
    //   [DECIMALS]: 8,
    //   [EXCHANGE_ADDRESS]: '0xdcb18E3230605A4c5EE6Fb86031EEFa8Ecd63430',
    //   [REDEEM_MAX_NUM]: 0,
    //   [REDEEM_MIN_NUM]: 0,
    //   [FEE]: 0.001,
    //   [MAXFEE]: 0,
    //   [MINFEE]: 0,
    //   [ISSWITCH]: dirSwitch(0),
    //   [ISDEPOSIT]: 0,
    //   [ISREDEEM]: 0,
    //   [DEPOSIT_ADDRESS]: '',
    //   [DEPOSIT_TYPE]: 1,
    //   [DEPOSIT_MAX_NUM]: 0,
    //   [DEPOSIT_MIN_NUM]: 0,
    //   [EXTENDOBJ]: {},
    // },
    '0x51600b0cff6bbf79e7767158c41fd15e968ec404': { // BTC
      [NAME]: 'Bitcoin' + config.suffix,
      [SYMBOL]: 'anyBTC',
      [DECIMALS]: 8,
      [EXCHANGE_ADDRESS]: '0x34358Ff75D78652F1797ebd73E8f7aFA92DaB501',
      [REDEEM_MAX_NUM]: 100,
      [REDEEM_MIN_NUM]: 0.001,
      [FEE]: 0.001,
      [MAXFEE]: 0.01,
      [MINFEE]: 0.0005,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '1918DgsaJCsRF5E5rTp2AsE5XyFTF95tTQ',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 100,
      [DEPOSIT_MIN_NUM]: 0.001,
      [EXTENDOBJ]: {
        VERSION: 'V2'
      },
    },
    // '0xdac17f958d2ee523a2206206994597c13d831ec7': { // USDT
    //   [NAME]: 'Tether',
    //   [SYMBOL]: 'USDT',
    //   [DECIMALS]: 6,
    //   [EXCHANGE_ADDRESS]: '0xB63d5B98fA56C1a2E3b4Ec7C41E38b2Cf7d6dc12',
    //   [REDEEM_MAX_NUM]: 0,
    //   [REDEEM_MIN_NUM]: 0,
    //   [FEE]: 0.001,
    //   [MAXFEE]: 0,
    //   [MINFEE]: 0,
    //   [ISSWITCH]: dirSwitch(0),
    //   [ISDEPOSIT]: 0,
    //   [ISREDEEM]: 0,
    //   [DEPOSIT_ADDRESS]: '',
    //   [DEPOSIT_TYPE]: 1,
    //   [DEPOSIT_MAX_NUM]: 0,
    //   [DEPOSIT_MIN_NUM]: 0,
    //   [EXTENDOBJ]: {},
    // },
    '0x979aca85ba37c675e78322ed5d97fa980b9bdf00': { // FSN
      [NAME]: 'Fusion' + config.suffix,
      [SYMBOL]: 'FSN',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xbD1F974bc2730E9620D91924993d30C2F96983b8',
      [REDEEM_MAX_NUM]: 5000000,
      [REDEEM_MIN_NUM]: 40,
      [FEE]: 0.001,
      [MAXFEE]: 200,
      [MINFEE]: 20,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0x4464FC279180045b1F57beACFa0D82e9Cd4235Cd',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 5000000,
      [DEPOSIT_MIN_NUM]: 1,
      [EXTENDOBJ]: {
        BRIDGE: [
          { type: 32659, isSwitch: 1 }
        ],
        VERSION: 'V2'
      },
    },
    '0x0abcfbfa8e3fda8b7fba18721caf7d5cf55cf5f5': { // LTC 5
      [NAME]: 'Litecoin' + config.suffix,
      [SYMBOL]: 'anyLTC',
      [DECIMALS]: 8,
      [EXCHANGE_ADDRESS]: '0x7b41Fc5889e35818c295c5Dbed4C28Ce2b40dB38',
      [REDEEM_MAX_NUM]: 20000,
      [REDEEM_MIN_NUM]: 0.2,
      [FEE]: 0.001,
      [MAXFEE]: 0.5,
      [MINFEE]: 0.07,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: 'Ld184nvim5wvH2cNw9tuJdH2VvL3Kx5wBh',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 20000,
      [DEPOSIT_MIN_NUM]: 0.1,
      [EXTENDOBJ]: {
        VERSION: 'V2'
      },
    },
    '0x514910771af9ca656af840dff83e8264ecf986ca': { // LINK
      [NAME]: 'ChainLink Token',
      [SYMBOL]: 'LINK',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x2296C4A9186b823dB1612e831808536ed451CBBe',
      [REDEEM_MAX_NUM]: 0,
      [REDEEM_MIN_NUM]: 0,
      [FEE]: 0.001,
      [MAXFEE]: 0,
      [MINFEE]: 0,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {},
    },
    '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': { // USDC
      [NAME]: 'USD Coin',
      [SYMBOL]: 'USDC',
      [DECIMALS]: 6,
      [EXCHANGE_ADDRESS]: '0x83034714666B0EB2209Aafc1B1CBB2AB9c6100Db',
      [REDEEM_MAX_NUM]: 0,
      [REDEEM_MIN_NUM]: 0,
      [FEE]: 0.001,
      [MAXFEE]: 0,
      [MINFEE]: 0,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {},
    },
    '0x6b175474e89094c44da98b954eedeac495271d0f': { // DAI
      [NAME]: 'Dai Stablecoin',
      [SYMBOL]: 'DAI',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x71035DeA521E651e53794BE87B1d0785E5C9A6Aa',
      [REDEEM_MAX_NUM]: 0,
      [REDEEM_MIN_NUM]: 0,
      [FEE]: 0.001,
      [MAXFEE]: 0,
      [MINFEE]: 0,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {},
    },
    '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984': { // UNI
      [NAME]: 'Uniswap',
      [SYMBOL]: 'UNI',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x97386862594F4cAceA245E8DbFa6230CA696C37C',
      [REDEEM_MAX_NUM]: 0,
      [REDEEM_MIN_NUM]: 0,
      [FEE]: 0.001,
      [MAXFEE]: 0,
      [MINFEE]: 0,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {},
    },
    '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e': { // YFI  35
      [NAME]: 'yearn.finance',
      [SYMBOL]: 'YFI',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xad2C1D2A9a599EeF950f5baF6830D68e2Be34d38',
      [REDEEM_MAX_NUM]: 0,
      [REDEEM_MIN_NUM]: 0,
      [FEE]: 0.001,
      [MAXFEE]: 0,
      [MINFEE]: 0,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {},
    },
    '0x4e15361fd6b4bb609fa63c81a2be19d873717870': { // FTM
      [NAME]: 'Fantom' + config.suffix,
      [SYMBOL]: 'FTM',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x90c8ea8ec7710034274868971c4e27ede33d9c10',
      [REDEEM_MAX_NUM]: 10000000,
      [REDEEM_MIN_NUM]: 200,
      [FEE]: 0.001,
      [MAXFEE]: 800,
      [MINFEE]: 80,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0xE3e0C14bbCBF86b3Ff60E8666C070d34b84F3f73',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 10000000,
      [DEPOSIT_MIN_NUM]: 200,
      [EXTENDOBJ]: {
        BRIDGE: [
          { type: 250, isSwitch: 1 }
        ],
        VERSION: 'V2',
        APPROVE: '0x5cbe98480a790554403694b98bff71a525907f5d',
        APPROVELIMIT: 0
      },
    },
    '0xe692c8d72bd4ac7764090d54842a305546dd1de5': { // BLOCK 5
      [NAME]: 'Blocknet' + config.suffix,
      [SYMBOL]: 'aBLOCK',
      [DECIMALS]: 8,
      [EXCHANGE_ADDRESS]: '0x2f9755c371C7f23AEcdF1C136D233b41cE3E0D55',
      [REDEEM_MAX_NUM]: 1000000,
      [REDEEM_MIN_NUM]: 2,
      [FEE]: 0.001,
      [MAXFEE]: 40,
      [MINFEE]: 1,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: 'BoXzhY6SQ2Zorj8ha8RamvRiKK16q6PRW3',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 1000000,
      [DEPOSIT_MIN_NUM]: 1,
      [EXTENDOBJ]: {
        VERSION: 'V2'
      },
    },
    '0xf21661d0d1d76d3ecb8e1b9f1c923dbfffae4097': { // RIO  696
      [NAME]: 'Realio Network',
      [SYMBOL]: 'RIO',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xBbFe35115d20407913f8b057EA0B375134d86C8A',
      [REDEEM_MAX_NUM]: 0,
      [REDEEM_MIN_NUM]: 0,
      [FEE]: 0.001,
      [MAXFEE]: 0,
      [MINFEE]: 0,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {},
    },
    '0x95da1e3eecae3771acb05c145a131dca45c67fd4': { // ESC  696
      [NAME]: 'Elastic',
      [SYMBOL]: 'ESC',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0xddA237b794968c5E1DBC5e9a41d543Dd69604e88',
      [REDEEM_MAX_NUM]: 0,
      [REDEEM_MIN_NUM]: 0,
      [FEE]: 0.001,
      [MAXFEE]: 0,
      [MINFEE]: 0,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {},
    },
    '0xc4a86561cb0b7ea1214904f26e6d50fd357c7986': { // CHG
      [NAME]: 'Charg',
      [SYMBOL]: 'CHG',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '0x57ffea19d861bd7f8683c0621d348c9f1f6f4b80',
      [REDEEM_MAX_NUM]: 0,
      [REDEEM_MIN_NUM]: 0,
      [FEE]: 0.001,
      [MAXFEE]: 0,
      [MINFEE]: 0,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 0,
      [ISREDEEM]: 0,
      [DEPOSIT_ADDRESS]: '',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 0,
      [DEPOSIT_MIN_NUM]: 0,
      [EXTENDOBJ]: {},
    },



    
    // '0x3d7f0933ac403773d219cf0519de8082946dc10f': { // FTM
    //   [NAME]: 'fUSD ERC20',
    //   [SYMBOL]: 'fUSD',
    //   [DECIMALS]: 18,
    //   [EXCHANGE_ADDRESS]: '',
    //   [REDEEM_MAX_NUM]: 10000000,
    //   [REDEEM_MIN_NUM]: 200,
    //   [FEE]: 0.001,
    //   [MAXFEE]: 800,
    //   [MINFEE]: 80,
    //   [ISSWITCH]: dirSwitch(0),
    //   [ISDEPOSIT]: 1,
    //   [ISREDEEM]: 1,
    //   [DEPOSIT_ADDRESS]: '0xf778F4D7a14A8CB73d5261f9C61970ef4E7D7842',
    //   [DEPOSIT_TYPE]: 1,
    //   [DEPOSIT_MAX_NUM]: 10000000,
    //   [DEPOSIT_MIN_NUM]: 200,
    //   [EXTENDOBJ]: {
    //     BRIDGE: [
    //       { type: 250, isSwitch: 1 }
    //     ],
    //     VERSION: 'V2',
    //   },
    // },
    // '0x5c08b51ddbe8ba76e07be79975906c39aef2893a': { // FTM
    //   [NAME]: 'fKRW ERC20',
    //   [SYMBOL]: 'fKRW',
    //   [DECIMALS]: 18,
    //   [EXCHANGE_ADDRESS]: '',
    //   [REDEEM_MAX_NUM]: 10000000,
    //   [REDEEM_MIN_NUM]: 200,
    //   [FEE]: 0.001,
    //   [MAXFEE]: 800,
    //   [MINFEE]: 80,
    //   [ISSWITCH]: dirSwitch(0),
    //   [ISDEPOSIT]: 1,
    //   [ISREDEEM]: 1,
    //   [DEPOSIT_ADDRESS]: '0xf778F4D7a14A8CB73d5261f9C61970ef4E7D7842',
    //   [DEPOSIT_TYPE]: 1,
    //   [DEPOSIT_MAX_NUM]: 10000000,
    //   [DEPOSIT_MIN_NUM]: 200,
    //   [EXTENDOBJ]: {
    //     BRIDGE: [
    //       { type: 250, isSwitch: 1 }
    //     ],
    //     VERSION: 'V2',
    //   },
    // },
  },
  [ETH_TEST_CHAINID]: {
    '0xd5190a1c83b7cf3566098605e00fa0c0fd5f3778': { // FTM
      [NAME]: 'Fantom',
      [SYMBOL]: 'FTM',
      [DECIMALS]: 18,
      [EXCHANGE_ADDRESS]: '',
      [REDEEM_MAX_NUM]: 5000000,
      [REDEEM_MIN_NUM]: 40,
      [FEE]: 0.001,
      [MAXFEE]: 200,
      [MINFEE]: 20,
      [ISSWITCH]: dirSwitch(0),
      [ISDEPOSIT]: 1,
      [ISREDEEM]: 1,
      [DEPOSIT_ADDRESS]: '0xc3Dad751b136d009aBC8031B6EFe70bBB4419E0a',
      [DEPOSIT_TYPE]: 1,
      [DEPOSIT_MAX_NUM]: 5000000,
      [DEPOSIT_MIN_NUM]: 1,
      [EXTENDOBJ]: {
        BRIDGE: [
          { type: 250, isSwitch: 1 }
        ],
        VERSION: 'V2',
        APPROVE: '0xe23edd629f264c14333b1d7cb3374259e9df5d55'
      },
    },
  }
}