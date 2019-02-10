import {
  ADD_TODO,
  COMPLETE_ALL_TODOS,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CLEAR_COMPLETED
} from '../constants/actionTypes';

export const addTodo = text => ({ type: ADD_TODO, text });
export const deleteTodo = id => ({ type: DELETE_TODO, id });
export const editTodo = (id, text) => ({ type: EDIT_TODO, id, text });
export const completeTodo = id => ({ type: COMPLETE_TODO, id });
export const completeAllTodos = () => ({ type: COMPLETE_ALL_TODOS });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
