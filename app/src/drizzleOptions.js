import Storage from '../../build/contracts/Storage.json';

// JavaScript Web3 Provider Object to be exported
const options = {
  contracts: [Storage]
  // Will attempt to connect to MetaMask
  // If we use a incognito tab it will not be
  // able to connect too MM and it will fallback
  // back to the Ganache instance.
  web3: {
     // Ganache instance
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  }
};

export default options;
