# Self Name Resolution Snap

This MetaMask Snap enables resolution of Self usernames to their corresponding cryptocurrency addresses using either `username.self` or `$:username` formats. It integrates with the Self naming service to provide seamless name resolution directly within MetaMask.

## Features

- Resolves Self usernames in two formats:
  - `.self` usernames (e.g., `username.self`)
  - `$:` scheme (e.g., `$:username`)
- Supports multiple chains including:
  - Ethereum (EIP155:1)
  - BNB Smart Chain (EIP155:56)
  - Avalanche (EIP155:43114)
  - Arbitrum (EIP155:42161)
- Seamless integration with MetaMask's name resolution system

## Installation

To install this snap in your MetaMask wallet:

1. Ensure you have MetaMask Flask installed
2. Visit [our deployment page] or connect to a dapp that uses this snap
3. Click "Connect" when prompted by MetaMask

## Usage

Once installed, the snap will automatically handle resolution of Self username when you enter them in MetaMask's address field using either format:

- `.self` username: `username.self`
- `$:` scheme: `$:username`

## Development

### Setup

```bash
yarn install
```

### Building

```bash
yarn build
```

### Testing

```bash
yarn test
```

## FAQ

### General Questions

**Q: What is Self Name Resolution Snap?**
A: Self Name Resolution Snap is a MetaMask extension that allows users to resolve human-readable Self usernames into cryptocurrency addresses, supporting both `.self` and `$:` formats.

**Q: Which name formats are supported?**
A: The snap supports two formats:
- Username format: `username.self` (e.g., `cryptomafia.self`)
- Dollar scheme: `$:username` (e.g., `$:cryptomafia`)

**Q: Which blockchain networks are supported?**
A: The snap currently supports:
- Ethereum (EIP155:1)
- BNB Smart Chain (EIP155:56)
- Avalanche (EIP155:43114)
- Arbitrum (EIP155:42161)

### Technical Questions

**Q: Do I need a special version of MetaMask?**
A: Yes, you need MetaMask Flask installed to use this snap.

**Q: How does the name resolution work?**
A: The snap communicates with the Self name resolution API to resolve usernames to their corresponding addresses on different chains. When you enter a Self username in MetaMask, the snap automatically queries the API and returns the appropriate address for the selected network.

**Q: Can I resolve addresses back to username?**
A: No, currently the snap only supports forward resolution (usernames to addresses) and does not support reverse resolution.

### Troubleshooting

**Q: What should I do if name resolution fails?**
A: If name resolution fails:
1. Verify you're using a supported network
2. Check that the username is correctly formatted
3. Ensure you have a stable internet connection
4. Try refreshing MetaMask

**Q: Why am I getting different addresses on different networks?**
A: This is expected behavior. Self usernames can resolve to different addresses on different blockchain networks, allowing users to have network-specific addresses under the same username.

**Q: Where can I report issues?**
A: Issues can be reported on our GitHub repository at [https://github.com/selfcrypto/self-snap/issues](https://github.com/selfcrypto/self-snap/issues)

