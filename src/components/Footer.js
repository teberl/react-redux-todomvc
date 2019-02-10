import React from 'react';
import PropTypes from 'prop-types';
import FilterLink from './FilterLink';
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../constants/todoFilters';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED])
};

function Footer(props) {
  const {
    activeCount,
    completedCount,
    onClearCompleted,
    filter: selectedFilter
  } = props;
  const itemWord = activeCount === 1 ? 'item' : 'items';
  const isActive = filter => filter === selectedFilter;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filter => (
          <li key={filter}>
            <FilterLink active={isActive(filter)} filter={filter}>
              {FILTER_TITLES[filter]}
            </FilterLink>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
