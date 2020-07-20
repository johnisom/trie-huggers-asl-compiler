const State = require("./state");

class SucceedState extends State {
  TYPE = "Succeed";

  toASLProperties() {
    return { Type: this.TYPE };
  }
}

module.exports = SucceedState;
