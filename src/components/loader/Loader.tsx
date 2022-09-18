import React from 'react';
import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.main}>
      <div className={styles.circle} />
    </div>
  );
};

export default Loader;
