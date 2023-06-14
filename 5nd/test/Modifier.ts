import { ethers } from "hardhat";
import { Contract } from "hardhat/internal/hardhat-network/stack-traces/model";

describe("Modifier", function () {
    let modifier: any;
    let deployer : any;
    let user : any;
before("", async () => {
    const [_deployer, _user] = await ethers.getSigners();
    deployer = _deployer;
    user = _user;
    const Modifier = await ethers.getContractFactory("Modifier");
    modifier = await Modifier.deploy();
});
it("modifier step1", async () => {
    await modifier.setEvenNumber(4);
})
it("modifier step1-1", async () => {
    await modifier.connect(user).setEvenNumber(4);
})
it("printA", async()=>{
    await modifier.printA();
})
})