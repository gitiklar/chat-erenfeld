import { createSlice } from "@reduxjs/toolkit";
import { addTask } from "./actions";

const initialState = {
  todosList: {},
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTask(state, action) {
      delete state.todosList[action.payload];
    },
    editTask(state, action) {
      state.todosList[action.payload].isEditing = true;
    },
    saveTask(state, action) {
      state.todosList[action.payload] = action.payload;
    },
  },
  extraReducers: {
    [addTask]: (state, action) => {
      state.todosList[action.payload.id] = action.payload.task;
    },
  },
});

export const { deleteTask, editTask } = slice.actions;
export default slice.reducer;
