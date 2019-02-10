import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import App from './App';
import Header from '../containers/Header';
import MainSection from '../containers/MainSection';

const setup = () => {
  const renderer = createRenderer();
  renderer.render(<App />);
  return renderer.getRenderOutput();
};

test('App renders correct', () => {
  const output = setup();

  expect(output.type).toBe('div');
  expect(output.props.className).toBe('todoapp');
});

test('App should render Header and MainSection', () => {
  const output = setup();
  const [header, mainSection] = output.props.children;

  expect(header.type).toBe(Header);
  expect(mainSection.type).toBe(MainSection);
});
