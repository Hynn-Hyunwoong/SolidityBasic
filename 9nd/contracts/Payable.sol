// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.9;

// import "hardhat/console.sol";

contract Payable{

    function getBalancec(address _address) public view returns(uint){
        return _address.balance;
    }

    function getMsgvalue() public payable returns(uint){
        return msg.value;
    }

    function getmsgSender() public view returns (address) {
        return msg.sender;
    }
}