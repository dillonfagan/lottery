# Lottery [![Hardhat][hardhat-badge]][hardhat] [![License: MIT][license-badge]][license]

[hardhat]: https://hardhat.org/
[hardhat-badge]: https://img.shields.io/badge/Built%20with-Hardhat-FFDB1C.svg
[license]: https://opensource.org/licenses/MIT
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg

Lottery is a very basic smart contract to demonstrate a use case of Hardhat and the Solidity programming language.

## How it works

1. An address deploys the Lottery contract and is assigned as its manager.
2. Additional addresses may call the `enter()` function, which accepts payment (minimum 0.01 ETH). The caller of the endpoint is added to the `players` array and the accepted ETH is added to the contract's `balance`.
3. When the pot reaches at least 5 ETH, the `pickWinner()` function is called. The contract's ETH balance is transferred to a random address in the `players` array and the array is reinitialized for another round.

## How to

### Get started
```bash
git clone https://github.com/dillonfagan/lottery.git
cd lottery

npm install
```

### Run tests
```bash
npx hardhat test
```

### Compile
```bash
npx hardhat compile
```

### Deploy to local testnet
```bash
npm run deploy
```
