import { ethers } from "hardhat";
import {Contract} from "@ethersproject/contracts";

describe("", function () {
    let globalVariable: any;
    let deployer: any;
    before(async function () {
        const [_deployer] = await ethers.getSigners();
        deployer = _deployer;
        const GlobalVariable = await ethers.getContractFactory("GlobalVariable", deployer);
        globalVariable = await GlobalVariable.deploy();
    })
    it("test wei", async function () {
        console.log("wei is : ", (await globalVariable.wei()).toString());
        console.log("gwei is : ", (await globalVariable.gwei()).toString());
        console.log("ether is : ", (await globalVariable.ether()).toString());
    })
})