import React, { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import "./Todo.css";

export const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    return (
        <div
            className={`${state.completed ? "completed" : ""}`}
            onClick={() => dispatch({ type: "TOGGLE_COMPLETED", payload: state.completed })}
        >
            <p>{state.item}</p>
        </div>
    );
};