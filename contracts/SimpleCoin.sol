// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SimpleCoin{
    mapping (address => uint256) public balances;

    constructor(){
        balances[tx.origin]= 100000;
    }

    event Transfer(address _from, address _to, uint256 _value);

    function sendMoney(address reciever, uint amount) public {
        require(balances[msg.sender] < amount, "Insufficient Funds");
        balances[msg.sender] -= amount;
        balances[reciever] += amount;

        emit Transfer(msg.sender, reciever, amount);
    }

    function getBalance() public view returns (uint256){
        return balances[msg.sender];
    }

    function getBalanceof(address addr) public view returns (uint256){
        return balances[addr];
    }
}