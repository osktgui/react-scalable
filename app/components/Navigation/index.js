/**
*
* Navigation
*
*/

import React from 'react';


import styles from './styles.css';

function Navigation({ topics, selectTopic }) {
  const topicsNodes = topics.map(topic => (
    <div
      key={topic.name}
      onClick={ () => selectTopic(topic) }
      >
      { topic.name }
    </div>
  ));
  return (
    <div className={styles.navigation}>
      { topicsNodes }
    </div>
  );
}

Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      descripcion: React.PropTypes.string.isRequired
    })
  ).isRequired,
  selectTopic: React.PropTypes.func.isRequired
};
export default Navigation;
