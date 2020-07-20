const PassState = require("../lib/passState");
const StateMachine = require("../lib/stateMachine");

const state = new PassState("No-op");
const machine = new StateMachine(state);
console.log(machine.toJson());
