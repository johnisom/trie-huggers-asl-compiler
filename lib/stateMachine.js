class StateMachine {
  states = [];

  constructor(startsAt) {
    let currentState = startsAt;

    do {
      this.states.push(currentState);
    } while ((currentState = currentState.nextState));
  }

  toJson() {
    const mappedStates = {};
    this.states.forEach((state) => {
      mappedStates[state.name] = state.toASLProperties();
    });

    return JSON.stringify({
      StartsAt: this.states[0].name,
      States: mappedStates,
    });
  }
}

// export default StateMachine;
module.exports = StateMachine;
