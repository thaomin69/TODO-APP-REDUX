const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        { 
            id: 1, 
            name: 'Learn CSS',
            completed: false,
            priority: 'Medium'
        },
        { 
            id: 2, 
            name: 'Learn HTML',
            completed: true,
            priority: 'High'
        },
        { 
            id: 2, 
            name: 'Learn React',
            completed: false,
            priority: 'Medium'
        },
    ],
}

const rootReducer = (state = initState, action) => {
    // {
    //     type: 'todoList/addTodo';
    //     payload: {
    //         id: 5;
    //         name: 'Learn Redux';
    //         completed: false;
    //         priority: 'Medium'
    //     }
    // }
    console.log({state, action});
    switch(action.type){
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        default:
            return state;
    }
}

export default rootReducer;