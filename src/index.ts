import type { OnNameLookupHandler } from '@metamask/snaps-sdk';

/**
 * Handle incoming name lookup requests from the MetaMask clients.
 *
 * @param request - The request arguments.
 * @param request.domain - The domain to resolve. Will be undefined if an address is provided.
 * @param request.address - The address to resolve. Will be undefined if a domain is provided.
 * @param request.chainId - The CAIP-2 chain ID of the associated network.
 * @returns If successful, an object containing the resolvedDomain or resolvedAddress. Null otherwise.
 */

const API_URL = 'https://self-name-res-api.vercel.app/api/resolveName';
const API_KEY = process.env.API_KEY!;

export const onNameLookup: OnNameLookupHandler = async (request) => {
  const { chainId: chainIdEip155, address, domain } = request;

  let name = domain;

  if (name?.startsWith('$:')) name = name?.slice(2) || '';
  if (name?.endsWith('.self')) name = name?.slice(0, -5) || '';

  const chainId = chainIdEip155.slice(7);

  if (address) {
    return null;
  }

  if (domain) {
    try {
      const response = await fetch(
        `${API_URL}?name=${name}&chainId=${chainId}`,
        {
          headers: {
            accept: 'application/json',
            authorization: API_KEY,
          },
        },
      );

      if (!response.ok) {
        console.error('Fetch error:', response.status, response.statusText);

        return null;
      }

      const data = await response.json();

      if (data.address) {
        return {
          resolvedAddresses: [
            {
              resolvedAddress: data.address,
              protocol: 'Self name resolution',
              domainName: domain,
            },
          ],
        };
      }
    } catch (error) {
      console.error('Error parsing data or network issues:', error);
    }
  }

  return null;
};
