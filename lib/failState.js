const State = require("./state");

class FailState extends State {
  TYPE = "Fail";

  constructor(name, error, cause) {
    super(name);
    this.error = error;
    this.cause = cause;
  }

  toASLProperties() {
    return { Type: this.TYPE, Error: this.error, Cause: this.cause };
  }
}

module.exports = FailState;
