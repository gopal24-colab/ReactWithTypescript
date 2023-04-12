import React, { Component } from "react";

type PrevState = {
  count: number;
};
type ClassGreetProps = {};

class ClassGreet extends Component<ClassGreetProps, PrevState> {
  state = { count: 0 };

  test = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.test}>Click</button>
      </div>
    );
  }
}
export default ClassGreet;
