import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value:  [
    { id: 1, title: 'todo1', description: '1 todo description', completed: false },
    { id: 2, title: 'todo2', description: '2 todo description', completed: false },
    { id: 3, title: 'todo3', description: '3 todo description', completed: true },
    { id: 4, title: 'todo4', description: '4 todo description', completed: false },
    { id: 5, title: 'todo5', description: '5 todo description', completed: false },
    { id: 6, title: 'todo6', description: '6 todo description', completed: false },
]

};


export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }
      state.value.push(newTodo)
    },
    toggleComplete: (state, action) => {
     const index = state.value.findIndex(
       (todo) => todo.id === action.payload.id
     )
     console.log('idex', index)
      state.value[index].completed = action.payload.completed
    },
    deleteTask: (state, action) => {
       state.value.splice(action.payload, 1)
     },
  
  },

});

export const { addTodo, toggleComplete, deleteTask } = todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTodo = (state) => state.todos.value;



export default todoSlice.reducer;
