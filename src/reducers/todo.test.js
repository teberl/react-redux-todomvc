import todos from './todos';
import * as actions from '../constants/actionTypes';

describe('todos reducer', () => {
  const initialState = [
    {
      text: 'Create ReactReduxTodoMvc',
      completed: false,
      id: 1
    }
  ];

  test('create initial state', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  test('add todo', () => {
    const todo = {
      text: 'Add todo',
      completed: false,
      id: 2
    };
    const expectetState = initialState.concat(todo);
    const newState = todos(initialState, {
      type: actions.ADD_TODO,
      text: 'Add todo'
    });
    expect(newState).toEqual(expectetState);
  });

  test('delete todo', () => {
    const todo = {
      text: 'Add todo',
      completed: false,
      id: 2
    };
    const todoState = initialState.concat(todo);

    expect(todos(todoState, { type: actions.DELETE_TODO, id: 2 })).toEqual(
      initialState
    );
  });

  test('edit todo', () => {
    const expectetState = [
      {
        text: 'Edit todo',
        completed: false,
        id: 1
      }
    ];

    expect(
      todos(initialState, { type: actions.EDIT_TODO, id: 1, text: 'Edit todo' })
    ).toEqual(expectetState);
  });

  test('complete todo', () => {
    const expectetState = [
      {
        text: 'Create ReactReduxTodoMvc',
        completed: true,
        id: 1
      }
    ];

    expect(todos(initialState, { type: actions.COMPLETE_TODO, id: 1 })).toEqual(
      expectetState
    );
  });

  test('complete todo', () => {
    const expectetState = [
      {
        text: 'Create ReactReduxTodoMvc',
        completed: true,
        id: 1
      }
    ];

    expect(todos(initialState, { type: actions.COMPLETE_TODO, id: 1 })).toEqual(
      expectetState
    );
  });

  test('complete all todos', () => {
    const todoState = initialState.concat(
      {
        text: 'Second Todo',
        completed: false,
        id: 2
      },
      {
        text: 'Third Todo',
        completed: false,
        id: 3
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
        id: 2
      },
      {
        text: 'Third Todo',
        completed: true,
        id: 3
      }
    );

    expect(todos(todoState, { type: actions.CLEAR_COMPLETED })).toHaveLength(1);
  });
});
