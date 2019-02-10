import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';
import { SHOW_ALL } from '../constants/todoFilters';

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    completeAllTodos: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired
  })
};

function MainSection(props) {
  const {
    todosCount,
    completedCount,
    actions: { completeAllTodos, clearCompleted },
    match: { params }
  } = props;
  const filter = params.filter || SHOW_ALL;

  return (
    <section className="main">
      {!!todosCount && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={completeAllTodos} />
        </span>
      )}
      <VisibleTodoList filter={filter} />
      <Footer
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={clearCompleted}
        filter={filter}
      />
    </section>
  );
}

export default MainSection;
