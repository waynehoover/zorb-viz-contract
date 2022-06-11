const hre = require("hardhat");

async function main() {
  const ZorbViz = await hre.ethers.getContractFactory("ZorbViz");
  const zorbViz = await ZorbViz.deploy("0xCa21d4228cDCc68D4e23807E5e370C07577Dd152", "0x787Bc4D2DA1CFCD5db700547B491E9Fd332e77C8");

  await zorbViz.deployed();

  console.log("ZorbViz deployed to:", zorbViz.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
