import todos from './todos';
import * as actions from '../constants/actionTypes';

describe('todos reducer', () => {
  const initialState = [
    {
      text: 'Create ReactReduxTodoMvc',
      completed: false,
      id: 0
    }
  ];

  test('create initial state', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  test('add todo', () => {
    const todo = {
      text: 'Add todo',
      completed: false,
      id: 1
    };
    const expectetResult = initialState.concat(todo);

    expect(
      todos(initialState, { type: actions.ADD_TODO, text: 'Add todo' })
    ).toEqual(expectetResult);
  });

  test('delete todo', () => {
    const todo = {
      text: 'Add todo',
      completed: false,
      id: 1
    };
    const todoState = initialState.concat(todo);

    expect(todos(todoState, { type: actions.DELETE_TODO, id: 1 })).toEqual(
      initialState
    );
  });

  test('edit todo', () => {
    const expectetResult = [
      {
        text: 'Edit todo',
        completed: false,
        id: 0
      }
    ];

    expect(
      todos(initialState, { type: actions.EDIT_TODO, id: 0, text: 'Edit todo' })
    ).toEqual(expectetResult);
  });

  test('complete todo', () => {
    const expectetResult = [
      {
        text: 'Create ReactReduxTodoMvc',
        completed: true,
        id: 0
      }
    ];

    expect(todos(initialState, { type: actions.COMPLETE_TODO, id: 0 })).toEqual(
      expectetResult
    );
  });

  test('complete todo', () => {
    const expectetResult = [
      {
        text: 'Create ReactReduxTodoMvc',
        completed: true,
        id: 0
      }
    ];

    expect(todos(initialState, { type: actions.COMPLETE_TODO, id: 0 })).toEqual(
      expectetResult
    );
  });

  test('complete all todos', () => {
    const todoState = initialState.concat(
      {
        text: 'Second Todo',
        completed: false,
        id: 1
      },
      {
        text: 'Third Todo',
        completed: false,
        id: 2
      }
    );

    const updatedState = todos(todoState, { type: actions.COMPLETE_ALL_TODOS });
    expect(updatedState.filter(todo => todo.completed)).toHaveLength(3);
  });

  test('clear completed', () => {
    const todoState = initialState.concat(
      {
        text: 'Second Todo',
        completed: true,
        id: 1
      },
      {
        text: 'Third Todo',
        completed: true,
        id: 2
      }
    );

    expect(todos(todoState, { type: actions.CLEAR_COMPLETED })).toHaveLength(1);
  });
});
