const SucceedState = require("../lib/succeedState");
const StateMachine = require("../lib/stateMachine");

const state = new SucceedState("success");
const machine = new StateMachine(state);
console.log(machine.toJson());
