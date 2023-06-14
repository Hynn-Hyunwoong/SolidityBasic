// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.12;

contract Struct {
    struct UserInfo {
        address user;
        uint balance;
        uint lastUpdateTime;
    }
    UserInfo public userInfo;
    function setUserInfo(address _user, uint _balance) public {
        userInfo.user = _user;
        userInfo.balance = _balance;
        userInfo.lastUpdateTime = block.timestamp;
    }

    UserInfo[] public userInfoArray;

    function setUserInfoArray(address _user, uint _balance) public {
        UserInfo memory _userInfo;
        _userInfo.user = _user;
        _userInfo.balance = _balance;
        _userInfo.lastUpdateTime = block.timestamp;
        userInfoArray.push(_userInfo);
    }

    struct UserBalance {
        uint balance;
        uint lastUpdateTime;
    }

    mapping(address => UserBalance) public userInfoMapping;

    function setUserInfoMapping(address _user, uint _balance) public {
        UserBalance memory _userBalance;
        _userBalance.balance = _balance;
        _userBalance.lastUpdateTime = block.timestamp;
        userInfoMapping[_user] = _userBalance;
    }
}