// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Lottery {
    address public manager;
    address payable[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(payable(msg.sender));
    }

    function random() private view returns (uint) {
        return uint(keccak256(abi.encode(block.difficulty, block.timestamp, players)));
    }

    function pickWinner() public {
        uint index = random() % players.length;
        players[index].transfer(address(this).balance);
    }
}