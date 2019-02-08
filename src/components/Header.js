import React from 'react';
// import PropTypes from 'prop-types';

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <input placeholder="What needs to be done?" />
    </header>
  );
}

export default Header;
