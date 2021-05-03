# DAPP - Pet Store
[Truffle Tutorial](https://www.trufflesuite.com/tutorial)

## Requirements
* node.js
* git
* truffle (npm install truffle -g)

## Setup
- From the root directory: truffle compile
- Use [Ganache](https://www.trufflesuite.com/ganache) to launch a personal blockchain for Ethereum development
- From the root directory: truffle migrate
- Install and setup the MetaMask add-on in chrome
  - Connect MetaMask to the blockchain create by Ganache.
    - Main Network > Custom RPC
  - Enter http://127.0.0.1:7545 in the "New RPC URL" box 
  - Enter 1337 in the "Chain ID" box
  - Click Save

### To run tests
- From the root directory: truffle test

### To run the dapp
- From the root directory: npm run dev