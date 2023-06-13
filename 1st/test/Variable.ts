import { ethers } from "hardhat";
import { Contract } from "@ethersproject/contracts";


describe("Default Test", function(){
    let variable : any;
    let deployer : any;
    before(async function(){
        const [_deployer] = await ethers.getSigners();
        deployer = _deployer;
        const Variable = await ethers.getContractFactory("Variable", deployer);
        variable = await Variable.deploy();
        console.log("typeof : ", Contract)
        console.log("typeof variable: ", variable)
    })
    it("base", async function(){
        console.log("defaultValue is : ",await variable.defaultValue())
    })
})