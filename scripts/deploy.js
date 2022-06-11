const hre = require("hardhat");

async function main() {
  const ZorbViz = await hre.ethers.getContractFactory("ZorbViz");
  const zorbViz = await ZorbViz.deploy();

  await zorbViz.deployed();

  console.log("ZorbViz deployed to:", zorbViz.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
