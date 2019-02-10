import React from 'react';
import TestRenderer from 'react-test-renderer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import MainSection from './MainSection';

test('MainSection should render correct', () => {
  const actions = {
    completeAllTodos: jest.fn(),
    clearCompleted: jest.fn()
  };
  const state = () => [
    {
      text: 'Test one',
      completed: false,
      id: 0
    },
    {
      text: 'Test two',
      completed: true,
      id: 1
    }
  ];
  const testRenderer = TestRenderer.create(
    <Provider store={createStore(combineReducers({ todos: state }))}>
      <Router>
        <Route
          render={props => (
            <MainSection
              todosCount={2}
              completedCount={1}
              actions={actions}
              {...props}
            />
          )}
        />
      </Router>
    </Provider>
  ).toJSON();

  expect(testRenderer).toMatchSnapshot();
});
