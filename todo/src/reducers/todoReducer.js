export const initialState = {
    todos: [{
        item: "Learn about reducers",
        completed: false,
        id: Date.now()
    }]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "MARK_COMPLETE":
            return {
                ...state
            }
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "CLEAR_COMPLETE":
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return !todo.completed
                })
            }
        default:
            return state
    }
}