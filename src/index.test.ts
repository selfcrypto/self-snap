import { describe, expect, it } from '@jest/globals';
import { installSnap } from '@metamask/snaps-jest';
import type { ChainId } from '@metamask/snaps-sdk';
import { onNameLookup } from '.';

const SELF_MOCK_DOMAINS = {
  klever_dashboard: {
    1: '0x4Df71388d9E6138dE8B4eB09cBDea7D2d998680E',
    56: '0x05cea86d4D374A58F2D1a2b7f3CD2A1D5875034f',
    // 137: '0x55d398326f99059fF775485246999027B3197955',
    43114: '0x05B6cEe013441649e32978Dd3c4a4dF56CF97c50',
    42161: '0x7bEd79b5cc7Dcd00B63406c70513d631cb327703',
  },
  cryptomafia: {
    1: '0x478EC10D3864a232AdE8306Eb6579e44Ae453EfE',
    56: '0x37951B8f36aB478dE2d26092Ffe9850f462AB74D',
    // 137: '0xD75fE3a059926E2cB08BA5Da10c5d3FF56c048a8',
    43114: '0x61db7bB118D6E051Fa3e057d182EC21D5aa40F41',
    42161: '0x586Fb97b94e994A432979E4D49D114e25b891557',
  },
  kleverhero: {
    1: '0x794857A3C16c9189e43ed6FBd2485D76539a9EEa',
    56: '0x61db7bB118D6E051Fa3e057d182EC21D5aa40F41',
    // 137: '0x39df14D96B0Ccd967281f4a96505A717208Ece34',
    43114: '0x586Fb97b94e994A432979E4D49D114e25b891557',
    42161: '0x794857A3C16c9189e43ed6FBd2485D76539a9EEa',
  },
  kokomelon: {
    1: '0xfd20Bc31B2B2e10A14facfF4d80A702bbA176a0a',
    56: '0xCd9235Ac8f8Ab7321a6aA1A50bB7b8773f4e955d',
    // 137: '0x88675C62c9e2C3F561d55225ABD48f20b22a1a66',
    43114: '0x3C05D6E88A4ACd9DC1ab982479f017fb9042aa66',
    42161: '0xB09492Ec6B0D8539D1EA21e495cf0dC65c3Dcf31',
  },
  kamehameha: {
    1: '0xAEd251294559B5986ef5e356FfB1769EEE923D76',
    56: '0xeCc5404Be6Db793d32D43Eff4B8278681bD63Ab1',
    // 137: '0xbD23B795E4e75bB817A00A7748C79D638171BFeC',
    43114: '0x1c9608E8B2DDBa11a8821E473347A967afe670Ce',
    42161: '0xa5d971D81591eeC84d8795F900a21C7FC7b66CD9',
  },
};

describe('onNameLookup', () => {
  Object.entries(SELF_MOCK_DOMAINS).forEach(([domainName, addresses]) => {
    Object.entries(addresses).forEach(([chainId, resolvedAddress]) => {
      it(`returns resolved address for ${domainName} on chain ID ${chainId}`, async () => {
        const request = {
          domain: `$:${domainName}`,
          chainId: `eip155:${chainId}` as ChainId,
        };

        const {} = await installSnap();
        const response = await onNameLookup(request);

        expect(response).toStrictEqual({
          resolvedAddresses: [
            {
              resolvedAddress: resolvedAddress,
              protocol: 'Self name resolution',
              domainName: `$:${domainName}`,
            },
          ],
        });
      });
    });
  });
});
