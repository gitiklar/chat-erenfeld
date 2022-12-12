import { createAction, nanoid } from "@reduxjs/toolkit";

export const addTask = createAction("todos/addTask", (taskText) => ({
  payload: { id: nanoid(), task: { taskText, isEditing: false } },
}));

export const saveTask = createAction("todos/addTask", (key , taskText) => ({
  payload: { id: key, task: { taskText, isEditing: false } },
}));
