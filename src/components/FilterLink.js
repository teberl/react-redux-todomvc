import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../constants/todoFilters';

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  filter: PropTypes.oneOf([SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED])
};

function FilterLink({ active, children, filter }) {
  return (
    <Link
      to={filter === SHOW_ALL ? '/' : `/${filter}`}
      className={classnames({ selected: active })}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </Link>
  );
}

export default FilterLink;
