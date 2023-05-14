import { ethers } from "hardhat";

async function main() {
  const SimpleCoin = await ethers.getContractFactory("SimpleCoin");
  const simpleCoin = await SimpleCoin.deploy();

  await simpleCoin.deployed();

  console.log(
    `SimpleCoin deployed to ${simpleCoin.address}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
