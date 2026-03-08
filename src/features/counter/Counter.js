import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span style={{ margin: "0 20px", fontSize: "24px" }}>
        {count}
      </span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}