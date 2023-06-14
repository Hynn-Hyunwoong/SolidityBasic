
pragma solidity ^0.8.9;

import "../artifacts/hardhat/console.sol";

contract Function2 {
    uint stateValue = 30;

    function pureFunction (uint a) public pure {
        uint b = a++;
    }
    function viewFunction (uint a) public view returns (uint) {
        uint b = a+ stateValue;
    }

    function getDoubleA(uint _a) public pure returns (uint){
        uint a = _a * 2;
        return a;
    }
    function getDoubleA2(uint _a) public pure returns (uint a){
        a = _a * 2;
    }

    function getDouble(uint _a, uint _b) public pure returns(uint a, uint b){
        a = _a * 2;
        b = _b * 2;
    }
    function printDouble() public view {
        (uint a2, uint b2) = getDouble(10, 20);
        console.log(a2, b2);
    }

    function getRef(bytes memory a ) public pure retunrs (string memory, bytes memory){
        string memory = "Hello";
        return (s, a)
    }

    function getRefExternal(string calldata a) external pure returns (string memory){
        return a;
    }
}

