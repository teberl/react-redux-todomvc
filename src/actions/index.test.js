import * as actions from './index';
import * as types from '../constants/ActionTypes';

it('addTodo should create ADD_TODO action', () => {
  expect(actions.addTodo('Use Redux')).toEqual({
    type: types.ADD_TODO,
    text: 'Use Redux'
  });
});
