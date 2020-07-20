const PassState = require("../lib/passState");
const TaskState = require("../lib/taskState");
const StateMachine = require("../lib/stateMachine");

const a = new PassState('a');
const b = new TaskState("TaskState", "arn:aws:states:us-east-1:123456789012:task:HelloWorld");
const c = new PassState('c');

a.next(b).next(c);

const machine = new StateMachine(a);
console.log(machine.toJson());
