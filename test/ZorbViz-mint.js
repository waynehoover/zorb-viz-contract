const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ZorbViz-mint", function () {
  let zorbViz, contractOwner, signer1, signer2;

  beforeEach(async () => {
    [contractOwner, signer1, signer2] = await ethers.getSigners();

    const ZorbViz = await ethers.getContractFactory("ZorbViz");
    zorbViz = await ZorbViz.deploy(
      "0xCa21d4228cDCc68D4e23807E5e370C07577Dd152", // mainnet zorb contract
      "0x787Bc4D2DA1CFCD5db700547B491E9Fd332e77C8",
      "https://baseuri.xyz"
    );
  });

  it("should mint a token given correct price", async () => {
    await zorbViz.connect(signer1).mint(1, { value: ethers.utils.parseEther("0.04") })

    expect(await zorbViz.ownerOf(1)).to.equal(signer1.address);
  });

  it("should error when minting the same token", async () => {
    await zorbViz.connect(signer1).mint(1, { value: ethers.utils.parseEther("0.04") })
    await expect(zorbViz.connect(signer2).mint(1, { value: ethers.utils.parseEther("0.04") }))
                .to.be.revertedWith("ERC721: token already minted");
  });

  it("should not mint when token is out of range", async () => {
    await expect(zorbViz.connect(signer2).mint(100000))
                .to.be.revertedWith("Token ID is out of range");
  });
});
