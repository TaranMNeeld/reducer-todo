import React from "react";
import { Todo } from "./Todo";


export const TodoList = ({ state }) => {
    return (
        <div>
            {state.todos.map(todo => (
                <Todo key={todo.id} {...todo} />
            ))}
        </div>
    );
};