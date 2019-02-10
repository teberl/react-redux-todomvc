import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  editTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  completeTodo: PropTypes.func
};

function TodoItem({ todo, deleteTodo, editTodo, completeTodo }) {
  const [edit, setEdit] = useState(false);

  const handleSave = (id, text) => {
    if (text.length === 0) {
      deleteTodo(id);
    } else {
      editTodo(id, text);
    }
    setEdit(false);
  };

  let element;
  if (edit) {
    element = (
      <TodoTextInput
        text={todo.text}
        editing={edit}
        onSave={text => handleSave(todo.id, text)}
      />
    );
  } else {
    element = (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
        />
        <label onDoubleClick={() => setEdit(!edit)}>{todo.text}</label>
        <button className="destroy" onClick={() => deleteTodo(todo.id)} />
      </div>
    );
  }

  return (
    <li
      className={classnames({
        completed: todo.completed,
        editing: edit
      })}
    >
      {element}
    </li>
  );
}

export default TodoItem;
