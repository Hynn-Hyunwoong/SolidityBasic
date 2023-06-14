import { ethers } from "hardhat";

describe("Mapping", ()=>{
    let mapping : any;
    let deployer : any;
    let user1 : any;
    let ETH : any;
    let KDAI : any;
    beforeEach(async ()=>{
        const [_deployer, _user1] = await ethers.getSigners();
        deployer = _deployer;
        user1 = _user1;
        ETH = "0xab";
        KDAI = "0xaf";
        const Mapping = await ethers.getContractFactory("Mapping", deployer);
        mapping = await Mapping.deploy();
    })

    it("Mapping Test", async ()=>{
        await mapping.setBalance(user1.address, 100);
        console.log("-------setBalances(user1.address, 100)-------")
        console.log("balances[user1] ;", (await mapping.balances(user1.address)).toString())
        await mapping.setBalance(user1.address, 200);
        console.log("-------setBalances(user1.address, 200)-------")
        console.log("balances[user1] ;", (await mapping.balances(user1.address)).toString())
        await mapping.deleteBalance(user1.address);
        console.log("-------deleteBalances(user1.address)-------")
        console.log("balances[user1] ;", (await mapping.balances(user1.address)).toString())
    })
    it.only("double mapping test", async ()=>{
        await mapping.setTokenBalances(user1.address, ETH, BigInt(10 ** 18));
        await mapping.setTokenBalances(user1.address, KDAI, BigInt(10 ** 18));
        console.log("tokenBalances[user1][ETH] ;", (await mapping.setTokenBalances(user1.address, ETH)).toString())
        console.log("tokenBalances[user1][KDAI] ;", (await mapping.setTokenBalances(user1.address, KDAI)).toString())
    })
})