class State {
  // nextState = null;

  constructor(name) {
    this.name = name;
  }

  // next(state) {
  //   this.nextState = state;
  //   return state;
  // }

  toASLProperties() {
    return { Type: this.TYPE, End: true };
  }
}

// export default State;
module.exports = State;
