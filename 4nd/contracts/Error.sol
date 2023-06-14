pragma solidity ^0.8.9;

contract Error {
    function excuteAssert(bool isAssert) public pure{
        assert(isAssert);
    }

    function deividedByZero(uint num1, uint num2) public pure {
        num1 / num2;
    }

    function overflow (uint num1) public pure {
        num1 + 111;
    }

    function excuteRevert(uint num) public pure {
        if(num <= 0){
            revert("num must be greater than 0");
        }
    }

    function excuteRequire(uint num) public pure {
        require(num > 0, "num must be greater than 0");
    }
}