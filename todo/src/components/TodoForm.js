import React from "react";
import { useState } from "react";

export const TodoForm = ({ dispatch }) => {

    const [input, setInput] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: {
                item: input,
                completed: false,
                id: Date.now()
            }
        });
        setInput("");
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="title"
                    placeholder="new todo..."
                    value={input}
                    onChange={({ target }) => setInput(target.value)}
                />
                <button type="submit">Add Todo</button>
                <button onClick={() => dispatch({ type: "CLEAR_COMPLETE" })}>Clear Completed</button>
            </form>
        </div>
    );
};