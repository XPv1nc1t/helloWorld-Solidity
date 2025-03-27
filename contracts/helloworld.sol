 //SPDX-License-Identifier: MIT
 pragma solidity ^0.8.20;

 contract helloWorld {
    event PrintMessage(string message);
 
   function sayHello() public {
      emit PrintMessage("Hellow World!");
   }
 }