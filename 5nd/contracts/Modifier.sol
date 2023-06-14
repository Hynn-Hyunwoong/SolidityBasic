// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.9;

import "../artifacts/hardhat/console.sol";


contract Modifier{
    address private owner;
    uint public a = 5;
    
    constructor(){
        owner = msg.sender;
    }

    modifier onlyEvenNumber(uint num) {
        require(num % 2 == 0, "Number is not even");
        _;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    modifier beforePlus () {
        a += 1;
        _;
    }
    modifier afterMinus(){
        _;
        a -= 1;
    }

    function setEvenNumber(uint num) public pure onlyEvenNumber(num) returns(uint){
        return num;
    }

    function printA() public afterMinus() beforePlus() onlyOwner() returns(uint){
        console.log(a);
    }
}