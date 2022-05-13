import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0;

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({ id: nextTodoId++, text: action.payload, completed: false })
    },
    toggleTodo(state, action) {
        
    //   const todo = state.filter(todo => todo.id === action.payload)
    //   console.log(todo)
    //   if (todo) {
    //     todo.completed = !todo.completed
    //   }


    const newTodos = state.map((todo, index) => {
        // Based on your code, I assume action.payload is the index of the todo in the array of todos
        if (index === action.payload) {
          const newTodo = {...todo};
          todo.completed = !todo.completed;
          
        }
    
        
      });
    

    },
    deleteToDo: (state, action)=>{
        return state.filter((todo) => todo.id !== action.payload.id);
    }

  }
})

export const { addTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer
