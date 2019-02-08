import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

it('should render', () => {
  const testRenderer = TestRenderer.create(<App />);
  const testInstance = testRenderer.root;

  expect(testInstance.findByProps({ className: 'TodoApp' }).type).toEqual(
    'div'
  );
  expect(
    testInstance.findByProps({ className: 'TodoApp' }).children
  ).toHaveLength(1);
});
