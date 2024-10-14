import "./Counter.css";
import React from "react";
import { increaseTimer, decreaseTimer } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const step = useSelector((state) => state.step);

  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increaseTimer())}>+ {step}</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decreaseTimer())}>- {step}</button>
    </>
  );
}
