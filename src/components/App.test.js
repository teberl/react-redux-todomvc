import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Header from '../containers/Header';
import MainSection from '../containers/MainSection';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const enzymeWrapper = shallow(<App />);
  return enzymeWrapper;
};

describe('App component', () => {
  test('renders self and subcomponents', () => {
    const enzymeWrapper = setup();

    expect(enzymeWrapper.find('div').hasClass('todoapp')).toBe(true);
    expect(enzymeWrapper.find(Header).name()).toBe('Connect(Header)');
    expect(enzymeWrapper.find(MainSection).name()).toBe('Connect(MainSection)');
  });
});
