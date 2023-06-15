import { ethers } from "hardhat";


describe("Payable", function () {
    let payable : any;
    let call : any;
    let deployer: any;
    beforeEach(async function (){
        const [_deployer] = await ethers.getSigners();
        deployer = _deployer;
        const Payable = await ethers.getContractFactory("Payable", deployer);
        payable = await Payable.deploy();
    })
    it("geBalance",async ()=>{
        console.log("getBalance : ", await payable.getBalance(deployer.address))
    })
    it("getMsgValue", async () => {
        console.log(await payable.getMsgValue({value: 1000}));
        console.log("after : ", await payable.getBalance(payable.address))
    })

    it("getmsgSender", async()=>{
        console.log(await payable.getmsgSender())
    })
})