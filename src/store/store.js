import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
//  import taskReducer from './reducers'
import todoSlice from './toDoSlice';


export const store = configureStore({
  reducer: {
     userAuth: authSlice,
     todos: todoSlice

    
  },
})

// export const rootReducer = combineReducers({taskReducer});