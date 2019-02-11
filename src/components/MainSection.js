import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import VisibleTodoList from '../containers/VisibleTodoList';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../constants/todoFilters';

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    completeAllTodos: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: PropTypes.oneOf([SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED])
    })
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
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={clearCompleted}
          filter={filter}
        />
      )}
    </section>
  );
}

export default MainSection;
