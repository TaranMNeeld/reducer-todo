import React from "react";
import { Todo } from "./Todo";


export const TodoList = ({ todos, dispatch }) => {
    const markComplete = (id) => {
        dispatch({type: "MARK_COMPLETE", payload: id})
      }
    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo.id} markComplete={markComplete} {...todo} />
            ))}
        </div>
    );
};