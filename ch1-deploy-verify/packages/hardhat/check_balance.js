const { ethers } = require("hardhat");

async function checkBalance() {
  const address = "0xFDbA451B3723c2231d88F894a7525B71E47eE407";

  try {
    const balance = await ethers.provider.getBalance(address);
    console.log("Address:", address);
    console.log("Balance (wei):", balance.toString());
    console.log("Balance (ETH):", ethers.utils.formatEther(balance));

    // Get deployer address
    const [deployer] = await ethers.getSigners();
    console.log("Deployer address:", deployer.address);
    console.log("Deployer balance:", ethers.utils.formatEther(await deployer.getBalance()));

  } catch (error) {
    console.error("Error:", error.message);
  }
}

checkBalance();