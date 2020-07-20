class State {
  nextState = null;

  constructor(name) {
    this.name = name;
  }

  next(state) {
    this.nextState = state;
    return state;
  }

  toASLProperties() {
    if (this.nextState) {
      return { Type: this.TYPE, Next: this.nextState.name };
    } else {
      return { Type: this.TYPE, End: true };
    }
  }
}

module.exports = State;
