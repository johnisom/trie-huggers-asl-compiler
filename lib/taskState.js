// taskState.js

const State = require("./state");

class TaskState extends State {
  TYPE = "Task";
  constructor(name, resource) {
    super(name);
    this.resource = resource;
  }

  toASLProperties() {
    return Object.assign(super.toASLProperties(), { Resource: this.resource });
  }
}

// export default PassState;
module.exports = TaskState;