/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-ethers')
require('@nomicfoundation/hardhat-chai-matchers')
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
};

const ALCHEMY_API_KEY = "_kLdam1VBZMQ62N6BcBXEWfbpzjqo6C1";
const GOERLI_PRIVATE_KEY = "e4c5aa1370f6bfe95d3742f7972e7adbec226ad02354af1991137fc5c7589b4f";
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
