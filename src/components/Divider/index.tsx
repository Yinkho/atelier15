import React, { ReactElement } from 'react';
import leafLogo from '../../assets/leaf-logo.svg';
import dashes from '../../assets/dashes.svg';
import styles from './styles.module.scss';

const Divider = (): ReactElement => {
  return (
    <div className={styles.divider}>
      <img src={dashes} />
      <img
        className={styles['leaf-logo']}
        src={leafLogo}
        alt="Changement de section"
      />
      <img src={dashes} />
    </div>
  );
};

export default Divider;
