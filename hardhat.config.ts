import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as cfg } from "dotenv";

cfg();

const PRIVATE_KEY= process.env.PRIVATE_KEY!;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks:{
    hyperspace:{
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: [PRIVATE_KEY],
      chainId: 3141,
    }
  }
};

export default config;

