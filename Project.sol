// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract local {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    struct Users {
        mapping(uint256 => string) data_store;
        uint256 nth_data_store;
    }

    mapping(address => Users) public no_of_Users;
    uint256 nth_user;

    function add(string memory _data) public {
        Users storage new_user = no_of_Users[msg.sender];
        new_user.data_store[new_user.nth_data_store] = _data;
        new_user.nth_data_store++;
    }

}



