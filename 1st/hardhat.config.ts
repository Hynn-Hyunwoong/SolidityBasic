import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking:{
        url: "https://eth-mainnet.alchemyapi.io/v2/your-api-key",
      },
      accounts : {
        mnemonic: "your mnemonic",
        initialIndex : 0,
        accountsBalance : "100000000000000"
      },
      blockGasLimit: 10000000,
    }
  }
};

export default config;
