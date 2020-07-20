// milestone2Test.js

const TaskState = require("../lib/taskState");
const StateMachine = require("../lib/stateMachine");

const state = new TaskState("TaskState", "arn:aws:states:us-east-1:123456789012:task:HelloWorld");
const machine = new StateMachine(state);
console.log(machine.toJson());