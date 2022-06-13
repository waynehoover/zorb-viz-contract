const hre = require("hardhat");

async function main() {
  const ZorbViz = await hre.ethers.getContractFactory("ZorbViz");

  // rinkeby
  // const zorbViz = await ZorbViz.deploy("0xd18e7A7e1a950eEc4AcC3f59468A14Cb5e3F6183", "0x408c189617d9191a61915d1b78a12b02bc964e74", "https://zorbz.vercel.app/api/metadata");

  // mainnet
  const zorbViz = await ZorbViz.deploy("0xCa21d4228cDCc68D4e23807E5e370C07577Dd152", "0x787Bc4D2DA1CFCD5db700547B491E9Fd332e77C8", "https://zorbz.vercel.app/api/metadata");

  await zorbViz.deployed();

  console.log("ZorbViz deployed to:", zorbViz.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
