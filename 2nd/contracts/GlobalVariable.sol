// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.9;

contract GlobalVariable{
    //base 
    uint public weiUnit = 1 wei;
    uint public etherUnit = 1 ether;
    uint public gweiUnit = 1 gwei;

    bytes1 public byteA = 0x01;
    bytes1 public byteB = 0x03;
    bytes1 public a1 = byteA << 2;
    bytes1 public a2 = byteA >> 1;
    bytes1 public a3 = byteA & byteB;
    bytes1 public a4 = byteA | byteB;
    bytes1 public a5 = byteA ^ byteB;
    bytes1 public a6 = ~byteA;    
}