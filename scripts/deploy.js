const { ethers, config } = require("hardhat");

async function main() {
  const signers = await ethers.getSigners();
  console.log("Address is", signers[0]);
  const UniSwap = await ethers.getContractFactory("CPAMM", signers[0]);

  console.log("Deploying UniSwap Contracts....");

  const UniSwapDeployment = await UniSwap.deploy();

  const transactionReceipt = await UniSwapDeployment.deployTransaction.wait(1);

  console.log("Deployed Transaction is ", UniSwapDeployment.deployTransaction);

  console.log(
    `Transaction Successful deployed at Address ${UniSwapDeployment.address}`
  );

  console.log("Here is the Transaction Receipt");

  console.log(transactionReceipt);
  console.log(`Gas used is ${transactionReceipt.gasUsed}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
