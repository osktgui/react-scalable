/**
*
* AppBar
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.css';

function AppBar() {
  return (
    <div className={styles.appBar}>
      <div className={styles.iconButton}>
        <FontAwesome
          className={styles.ico }
          name='bars'
        />
      </div>
      <div className={styles.heading}>
        Coder daily
      </div>
      <div className={styles.linkContainer}>
        Log in
      </div>
    </div>
  );
}

export default AppBar;
