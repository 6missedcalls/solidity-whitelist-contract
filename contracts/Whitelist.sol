//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Whitelist {
    address public _owner;
    mapping (address => bool) public whitelist;

    constructor() {
        _owner = msg.sender;
    }

    function addToWhitelist(address _addr) public {
        require(msg.sender == _owner);
        whitelist[_addr] = true;
    }

    function removeFromWhitelist(address _addr) public {
        require(msg.sender == _owner);
        whitelist[_addr] = false;
    }

    function isWhitelisted(address _addr) public view returns (bool) {
        return whitelist[_addr];
    }
}