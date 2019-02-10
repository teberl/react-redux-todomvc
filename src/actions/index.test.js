import * as actions from './index';
import * as types from '../constants/actionTypes';

test('addTodo should create ADD_TODO action', () => {
  expect(actions.addTodo('Use Redux')).toEqual({
    type: types.ADD_TODO,
    text: 'Use Redux'
  });
});

test('deleteTodo should create DELETE_TODO action', () => {
  expect(actions.deleteTodo(42)).toEqual({
    type: types.DELETE_TODO,
    id: 42
  });
});

test('editTodo should create EDIT_TODO action', () => {
  expect(actions.editTodo(42, 'Some edited text.')).toEqual({
    type: types.EDIT_TODO,
    id: 42,
    text: 'Some edited text.'
  });
});

test('completeTodo should create COMPELTE_TODO action', () => {
  expect(actions.completeTodo(42)).toEqual({
    type: types.COMPLETE_TODO,
    id: 42
  });
});

test('completeAllTodos should create COMPLETE_ALL_TODOS action', () => {
  expect(actions.completeAllTodos()).toEqual({
    type: types.COMPLETE_ALL_TODOS
  });
});

test('clearCompleted should create CLEAER_COMPLETED action', () => {
  expect(actions.clearCompleted()).toEqual({
    type: types.CLEAR_COMPLETED
  });
});
