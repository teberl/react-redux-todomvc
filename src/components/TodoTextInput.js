import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ENTER_KEY_CODE = 13;

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
};

function TodoTextInput(props) {
  const { onSave, text, placeholder, editing, newTodo } = props;
  const [localText, setLocalText] = useState(text || '');

  const handleSubmit = e => {
    const text = e.target.value.trim();
    if (e.which === ENTER_KEY_CODE) {
      onSave(text);
      if (newTodo) {
        setLocalText('');
      }
    }
  };

  const handleChange = e => setLocalText(e.target.value);

  const handleBlur = e => {
    if (!newTodo) {
      onSave(e.target.value);
    }
  };

  return (
    <input
      className={classnames({
        edit: editing,
        'new-todo': newTodo
      })}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={localText}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
}

export default TodoTextInput;
