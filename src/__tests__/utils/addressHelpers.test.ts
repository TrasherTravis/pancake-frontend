import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    321: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    97: '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  }

  it(`get address for mainnet (chainId 321)`, () => {
    const expected = address[321]
    expect(getAddress(address, 321)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    const expected = address[97]
    expect(getAddress(address, 97)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    const expected = address[321]
    expect(getAddress(address, 31337)).toEqual(expected)
  })
})
