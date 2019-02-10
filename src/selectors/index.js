import { createSelector } from 'reselect';

const getTodos = state => state.todos;

export const getCompletedTodoCount = createSelector(
  [getTodos],
  todos => Object.values(todos).filter(todo => todo.completed).length
);
