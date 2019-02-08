import React from 'react';
import TestRenderer from 'react-test-renderer';
import Header from './Header';

it('renders correctly', () => {
  const testRenderer = TestRenderer.create(<Header />).toJSON();

  expect(testRenderer).toMatchSnapshot();
});
