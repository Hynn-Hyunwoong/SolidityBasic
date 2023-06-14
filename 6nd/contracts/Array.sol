// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.9;

contract Array {
    string[5] public array1 = ["BUSD", "ETH", "KDAI", "USDC", "USDT"];  
    uint[] public array2;
    bytes b1 = "Hello";
    bytes b2 = "Hynn";
    bytes b3 = bytes.concat(b1, b2);
    string s1 = "Hi";
    string s2 = "Hynn";
    string s3 = string.concat(s1, s2);
    bool public equalResult = equalString(s1, s2);

    function getArrayLength() public view returns(uint){
        return array1.length;
    }

    function getArray2Length() public view returns(uint){
        return array2.length;
    }

    function pushArray2(uint _value) public {
        array2.push(_value);
    }

    function popArray2() public {
        array2.pop();
    }

    function setArray2(uint index, uint value) public {
        array2[index] = value;
    } 

    function deleteArray2(uint index) public {
        delete array2[index];
    }

    function equalString(string memory s1, string memory s2)public pure returns (bool){
        keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2));
    }

    function getBytes() public view returns (bytes memory, bytes memory, bytes memory){
        bytes memory _b1 = b1;
        bytes memory _b2 = b2;
        bytes memory _b3 = b3;
        return (_b1, _b2, _b3);
    }

    function getString() public view returns (string memory, string memory, string memory){
        string memory _s1 = s1;
        string memory _s2 = s2;
        string memory _s3 = s3;
        return (_s1, _s2, _s3);
    }
}

