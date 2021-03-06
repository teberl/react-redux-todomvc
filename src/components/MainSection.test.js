import React from 'react';
import TestRenderer from 'react-test-renderer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import MainSection from './MainSection';

test('MainSection should render correct', () => {
  const testState = [
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
  const testReducer = () => testState;
  const completedCount = testState.filter(todo => todo.completed).length;
  const mainSectionProps = {
    todosCount: testState.length,
    completedCount,
    actions: {
      completeAllTodos: jest.fn(),
      clearCompleted: jest.fn()
    }
  };

  const testRenderer = TestRenderer.create(
    <Provider store={createStore(combineReducers({ todos: testReducer }))}>
      <Router>
        <Route
          render={props => <MainSection {...mainSectionProps} {...props} />}
        />
      </Router>
    </Provider>
  ).toJSON();

  expect(testRenderer).toMatchSnapshot();
});
