import React from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

function Header({ addTodo }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        newTodo
        placeholder="What needs to be done?"
        onSave={text => addTodo(text)}
      />
    </header>
  );
}

export default Header;
