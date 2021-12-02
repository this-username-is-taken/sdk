import JSBI from 'jsbi'
import { Token } from 'entities'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  FUJI = 43113,
  AVALANCHE = 43114,
  POLYGON = 137,
  AURORA = 1313161554
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const ZERO_INIT_CODE = '0x0000000000000000000000000000000000000000000000000000000000000000'

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xE4A575550C2b460d2307b82dCd7aFe84AD1484dd',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88',
  [ChainId.POLYGON]: '0x10475e37cF1D006b56A4E4739Bcb478361564D22',
  [ChainId.AURORA]: '0xc66F594268041dB60507F00703b152492fb176E7'
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: ZERO_ADDRESS,
  [ChainId.AVALANCHE]: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106',
  [ChainId.POLYGON]: '0x60913758635b54e6C9685f92201A5704eEe74748',
  [ChainId.AURORA]: '0x2CB45Edb4517d5947aFdE3BEAbF95A582506858B'
}

export const INIT_CODE_HASH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: ZERO_INIT_CODE,
  [ChainId.AVALANCHE]: ZERO_INIT_CODE,
  [ChainId.POLYGON]: '0x4a697f690d1f46e0f1a897a8662acae31ced3039b00c052392ed0bc179f9f28c',
  [ChainId.AURORA]: '0x754e1d90e536e4c1df81b7f030f47b4ca80c87120e145c294f098c83a6cb5ace'
}

export const XTRI: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'xTRI', 'TriBar'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, ZERO_ADDRESS, 18, 'xTRI', 'TriBar'),
  [ChainId.POLYGON]: new Token(ChainId.POLYGON, ZERO_ADDRESS, 18, 'xTRI', 'TriBar'),
  [ChainId.AURORA]: new Token(ChainId.AURORA, '0x802119e4e253D5C19aA06A5d567C5a41596D6803', 18, 'xTRI', 'TriBar')
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
