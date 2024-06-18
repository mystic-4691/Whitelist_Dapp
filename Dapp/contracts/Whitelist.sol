// SPDX-License-Identifier:MIT

pragma solidity ^0.8.24;

contract Whitelist{

    uint8 public MaxWhitelistedAddress;

    uint8 public NumWhitelistedAddress;

    mapping (address => bool) WhitelistedAddress;

    constructor(uint8 _MaxWhitelistedAddress){

        MaxWhitelistedAddress=_MaxWhitelistedAddress;
    }


    function AddAddresstoWhitelist() public  {
        require(!WhitelistedAddress[msg.sender],"Address already in whitelist");
        require(NumWhitelistedAddress<MaxWhitelistedAddress,"Max whitelist address are reached");
        WhitelistedAddress[msg.sender]=true;
        NumWhitelistedAddress+=1;


    }

}