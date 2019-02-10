import React from 'react';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import MainSection from '../containers/MainSection';

App.prototype = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: PropTypes.string
    })
  })
};

function App(props) {
  return (
    <div className="todoapp">
      <Header />
      <MainSection {...props} />
    </div>
  );
}

export default App;
