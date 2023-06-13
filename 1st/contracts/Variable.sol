// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.9;

contract Variable{
    //base 
    uint private _defaultValue;
    uint public defaultValue;
    uint constant CONSTANT_VALUE = 12345678;
    uint immutable IMMUTABLE_VALUE;
    
    constructor(){
        IMMUTABLE_VALUE = 123;
    }
    // function setValue() public{
    //     CONSTANT_VALUE = 123;
    //     //Cannot assign to a constant variable.solidity(6520)

    // }
}