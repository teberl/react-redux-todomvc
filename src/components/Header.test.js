import React from 'react';
import TestRenderer from 'react-test-renderer';
import Header from './Header';

test('Header should render correct', () => {
  const props = { addTodo: jest.fn() };
  const testRenderer = TestRenderer.create(<Header {...props} />).toJSON();

  expect(testRenderer).toMatchSnapshot();
});
