/**
*
* LinkList
*
*/

import React from 'react';

import Link from '../Link';
import styles from './styles.css';
import IconButton from '../IconButton';

function LinkList({ links, topicName, children }) {
  const linkNodes = links.map(link => (
    <Link key={ link.id } link={ link } />
  ));
  return (
    <div className={styles.linkList}>
      <h1>{ topicName }</h1>
      { linkNodes }
      <IconButton
        icon='plus'
        buttonClass={styles.button}
        iconClass={styles.icon}
      />
      { children }
    </div>
  );
}

LinkList.propTypes = {
  children: React.PropTypes.element,
  topicName: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired
    })
  )
};

export default LinkList;
