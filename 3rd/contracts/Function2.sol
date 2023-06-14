
pragma solidity ^0.8.9;


contract Function2 {
    uint stateValue = 30;

    function pureFunction () public pure returns (uint) {
        return 1;
    }
    function viewFunction () public view returns (uint) {
        return 1;
    }
}

