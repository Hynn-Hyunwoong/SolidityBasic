// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.12;

import "../artifacts/hardhat/console.sol";

contract Mapping {
    mapping (address => uint) public balances;
    mapping (address => mapping(address =. uint)) public tokenBalances;

    function setBalance(address user, uint amount) public {
        balances[user] = amount;
    }

    function deleteBalance (address user) public {
        delete balances[user];
    }

    function setTokenBalances(address user, address token, uint amount) public {
        tokenBalances[user][token] = amount;
    }
}