import * as actions from './index';
import * as types from '../constants/actionTypes';

test('addTodo should create ADD_TODO action', () => {
  expect(actions.addTodo('Use Redux')).toEqual({
    type: types.ADD_TODO,
    text: 'Use Redux'
  });
});
