import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Divider from '../../../components/Divider';
import styles from './styles.module.scss';

const DominiqueTalleux = (): ReactElement => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1>Dominique TALLEUX</h1>
        </div>
      </div>
      <Divider />
      <p className={styles.wait}>Page disponible très bientot !</p>
    </div>
  );
};

DominiqueTalleux.propTypes = {};

export default DominiqueTalleux;
