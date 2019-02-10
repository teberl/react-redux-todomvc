import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';
import { SHOW_ALL, SHOW_ACTIVE } from '../constants/todoFilters';

describe('Footer', () => {
  describe('with SHOW_ALL filter', () => {
    test('renders the items count and clear button correct', () => {
      const footerProps = {
        activeCount: 1,
        completedCount: 1,
        onClearCompleted: jest.fn(),
        filter: SHOW_ALL
      };
      const testRenderer = TestRenderer.create(
        <Router>
          <Route render={props => <Footer {...footerProps} {...props} />} />
        </Router>
      ).toJSON();

      expect(testRenderer).toMatchSnapshot();
    });

    test('renders the items count correct and no clear button', () => {
      const footerProps = {
        activeCount: 0,
        completedCount: 0,
        onClearCompleted: jest.fn(),
        filter: SHOW_ALL
      };
      const testRenderer = TestRenderer.create(
        <Router>
          <Route render={props => <Footer {...footerProps} {...props} />} />
        </Router>
      ).toJSON();

      expect(testRenderer).toMatchSnapshot();
    });
  });
});

describe('with SHOW_ACTIVE filter', () => {
  test('renders the items count and clear button correct', () => {
    const footerProps = {
      activeCount: 4,
      completedCount: 1,
      onClearCompleted: jest.fn(),
      filter: SHOW_ACTIVE
    };
    const testRenderer = TestRenderer.create(
      <Router>
        <Route render={props => <Footer {...footerProps} {...props} />} />
      </Router>
    ).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });
});
