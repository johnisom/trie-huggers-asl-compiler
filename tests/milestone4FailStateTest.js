const StateMachine = require("../lib/stateMachine");
const FailState = require("../lib/failState");

const state = new FailState("fail", "Invalid", "cause i said so");
const machine = new StateMachine(state);
console.log(machine.toJson());
