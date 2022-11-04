import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lottery", () => {
    async function deployFixture() {
        const [owner] = await ethers.getSigners();
        const Lottery = await ethers.getContractFactory("Lottery");
        const lottery = await Lottery.deploy();
    
        return { lottery, owner };
      }

    it("should set the right manager", async () => {
        const { lottery, owner } = await loadFixture(deployFixture);

        expect(await lottery.manager()).to.equal(owner.address);
    });
});