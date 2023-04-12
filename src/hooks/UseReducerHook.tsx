import React, { useReducer } from "react";

type CountState = {
  count: number;
};
type CounterAction = {
  type: string;
  payload: number;
};
const initalState = { count: 0 };

const UseReducerHook = () => {
  const reducer = (state: CountState, action: CounterAction) => {
    switch (action.type) {
      case "incr":
        return { count: state.count + action.payload };
      case "decr":
        return {
          count: state.count > 0 ? state.count - action.payload : state.count,
        };
      default:
        return state;
    }
  };

  const [counter, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
      Count : {counter.count}
      <button
        onClick={() => {
          dispatch({ type: "incr", payload: 20 });
        }}>
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decr", payload: 10 });
        }}>
        Decrement
      </button>
    </div>
  );
};

export default UseReducerHook;
