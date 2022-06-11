require("dotenv").config();
// require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.10",
      },
    ],
  },
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: 31337,
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        blockNumber: 14787640,
      },
    },
    rinkeby: {
      url:  `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_R_API_KEY}`,
      chainId: 4,
      accounts: [`0x${process.env.TESTNET_PRIVATE_KEY}`],
    },
    mainnet: {
      url:  `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      chainId: 1,
      accounts: [`0x${process.env.MAINNET_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY,
      rinkeby: process.env.ETHERSCAN_API_KEY,
    },
  },
};
