import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allIds: [],
  byIds: {},
};

let nextTodoId = 0;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const id = ++nextTodoId;
  
      state.allIds.push(id);

      state.byIds[id] = {
        content: action.payload,
        completed: false,
      };
    },

    toggleCompleted: (state, { payload }) => {
      const { id } = payload;
      const targetTodo = state.byIds[id];

      targetTodo.completed = !targetTodo.completed;
    },

    removeTodo: (state, action) => {
      const targetTodo = action.payload.id;

      state.allIds = state.allIds.filter(item => item !== targetTodo)
    },

    filterCompleted: (state, todos) => {
      const targetTodos = todos.payload.filter(item => item = item.completed);
      const targetIds = targetTodos.map(item => item = item.id);

      state.allIds = targetIds;
    },

    filterNotCompleted: (state, todos) => {
      const targetTodos = todos.payload.filter(item => item = item.completed === false);
      const targetIds = targetTodos.map(item => item = item.id);

      state.allIds = targetIds;
    },


  },
});


export const { addTodo, toggleCompleted, removeTodo, filterCompleted, filterNotCompleted } = todoSlice.actions;

export default todoSlice.reducer;
