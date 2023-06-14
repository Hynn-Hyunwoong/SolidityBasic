import {ethers} from 'hardhat';


describe('Struct', () => {
    let struct : any;
    let deployer : any;
    let user1 : any;
    let user2 : any;
    let ETH : any;
    let KDAI : any;

    beforeEach(async () => {
        const [_deployer, _user1, _user2] = await ethers.getSigners();
        deployer = _deployer;
        user1 = _user1;
        user2 = _user2;
        ETH = "0xab";
        KDAI = "0xaf";
        const Struct = await ethers.getContractFactory('Struct', deployer);
        struct = await Struct.deploy();
    })
    it("StructArray", async () => {
        await struct.setUserInfoArray(user1.address, 100);
        await struct.setUserInfoArray(user2.address, 200);
        console.log("t",(await struct.userInfoArray(0)).toString());
        console.log('tt', (await struct.userInfoArray(1)).toString());
    })

    it("StructMapping", async () => {
        await struct.setUserInfoMapping(user1.address, 100);
        await struct.setUserInfoMapping(user2.address, 200);
        console.log('-------------------')
        console.log('userInfoMapping[0]', (await struct.userInfoMapping(user1.address)).toString());
        console.log('userInfoMapping[1]', (await struct.userInfoMapping(user2.address)).toString());
    })
})