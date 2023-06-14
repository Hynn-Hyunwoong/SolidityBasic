import {ethers} from "hardhat";

describe("Array", function () {
    let array: any;
    let deployer : any;
    let user : any;
    beforeEach(async () =>{
        const [_deployer, _user] = await ethers.getSigners();
        deployer = _deployer;
        user = _user;
        const Array = await ethers.getContractFactory("Array", deployer);
        array = await Array.deploy();
    })
    it("static Array Test", async  ()=> {
        console.log("static Array Test [0]:", await array.array1(0))
        console.log("static Array Test [1]:", await array.array1(1))
        console.log("static Array Test [2]:", await array.array1(2))
        console.log("static Array Test [3]:", await array.array1(3))
        console.log("static Array Test [4]:", await array.array1(4))
        console.log("static array length:" , await array.getArrayLength().toString())
    })
    it("Dynamic Array test", async () => {
        console.log("array2 length :", (await array.getArray2Length()).toString())
        await array.pushArray2(1000000)
        console.log("the complete pushArray2(100000)")
        console.log("array2 length[0] :", (await array.array2(0)).toString())
        console.log("array2 length :", (await array.getArray2Length()).toString())
        await array.setArray2(0,1)
        console.log("--------------setArray(0,1)-------------")
        console.log("array2 length[0] :", (await array.array2(0)).toString())
    })
    it.only("String Array test", async () => {
        console.log("stringArray length :", (await array.getString()).toString())
        console.log("bytes test", (await array.getBytes().toString()))
    })
})