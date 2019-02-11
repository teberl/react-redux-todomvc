import React from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

function Header({ addTodo }) {
  const handleSave = text => {
    if (text.length > 0) {
      addTodo(text);
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        newTodo
        placeholder="What needs to be done?"
        onSave={handleSave}
      />
    </header>
  );
}

export default Header;
