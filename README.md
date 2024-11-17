# Self Name Resolution Snap

This MetaMask Snap enables resolution of Self domain names to their corresponding cryptocurrency addresses using either `domain.self` or `$:domain` formats. It integrates with the Self naming service to provide seamless name resolution directly within MetaMask.

## Features

- Resolves Self domain names in two formats:
  - `.self` domains (e.g., `domain.self`)
  - `$:` scheme (e.g., `$:domain`)
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

Once installed, the snap will automatically handle resolution of Self domains when you enter them in MetaMask's address field using either format:

- `.self` domain: `domain.self`
- `$:` scheme: `$:domain`

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

