import React from "react";
import "./Todo.css";

export const Todo = props => {
    return (
        <div
            className={`${props.completed ? "completed" : ""}`}
            onClick={() => {props.markComplete(props.id)}}
        >
            <p>{props.item}</p>
        </div>
    );
};