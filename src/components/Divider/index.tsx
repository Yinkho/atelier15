import React, { ReactElement } from 'react';
import logo from '../../assets/logo.svg';
import dashes from '../../assets/dashes.svg';
import styles from './styles.module.scss';

const Divider = (): ReactElement => {
  return (
    <div className={styles.divider}>
      <img src={dashes} />
      <img className={styles.logo} src={logo} alt="Changement de section" />
      <img src={dashes} />
    </div>
  );
};

export default Divider;
