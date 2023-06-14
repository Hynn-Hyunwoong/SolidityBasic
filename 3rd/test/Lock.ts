import { ethers } from "hardhat";
import { Contract } from "hardhat/internal/hardhat-network/stack-traces/model";

describe("", function () {
  let function1 : any;
  let deployer : any;

  before(async function(){
   const [_deployer] = await ethers.getSigners();
    deployer = _deployer;
    const Function1 = await ethers.getContractFactory("Function1");
    function1 = await Function1.deploy();
  })

  it("", async function(){
    await function1.Fx1();
    console.log("stateValue", await function1.stateValue());
    console.log("stateValue", await function1.localvalue());
  });
})