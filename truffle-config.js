require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  compilers: {
    solc: {
      version: '0.7.4',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 6721975,
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(
          `uphold wide shed another couch focus hidden soup lazy top salon salute`, //mnemonic
          `https://goerli.infura.io/v3/<API_KEY>`, //endpoint
          0, 20
        );
      },
      network_id: "5",
      gasPrice: 25e9,
      gas: 6721975,
    },
    bsc_testnet: {
      provider: () => {
        return new HDWalletProvider(
          `uphold wide shed another couch focus hidden soup lazy top salon salute`, //mnemonic
          `https://data-seed-prebsc-1-s1.binance.org:8545`, //endpoint
          0, 20
        );
      },
      network_id: "97",
      gasPrice: 25e9,
      gas: 6721975,
    },
    eth_mainnet: {
      provider: () => {
        return new HDWalletProvider(
          ``, //mnemonic
          `https://mainnet.infura.io/v3/<API_KEY>`, //endpoint
           0, 20
        );
      },
      network_id: "1",
      gasPrice: 25e9,
      gas: 6721975,
    },
    bsc_mainnet: {
      provider: () => {
        return new HDWalletProvider(
          ``, //mnemonic
          `https://bsc-dataseed.binance.org`, //endpoint
           0, 20
        );
      },
      network_id: "56",
      gasPrice: 25e9,
      gas: 6721975,
    }
  },
  mocha: {
    enableTimeouts: false,
    useColors: true,
    reporter: "eth-gas-reporter",
    reporterOptions: {
      currency: "USD",
      gasPrice: 10,
    },
  },
  plugins: ["truffle-contract-size", 'truffle-plugin-verify'],
  api_keys: {
  }
};
