import {ethers} from "hardhat";
import { Contract } from "ethers";

describe("Error", function() {
    let error:any;
    let deployer : any;

    before(async function() {
        const [_deployer] = await ethers.getSigners();
        deployer = _deployer;
        const Error = await ethers.getContractFactory("Error");
        error = await Error.deploy();
    })

    it("excuteAssert", async function () {
        await error.excuteAssert(false);
    })
    it("deividedByZero", async ()=>{
        await error.deividedByZero(1,0);
    })
    it("overflow", async ()=>{
        await error.overflow(255);
    })
    it("excuterevert", async()=>{
        await error.excuterevert(-1);
    })
})