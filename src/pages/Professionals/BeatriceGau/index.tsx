import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Divider from '../../../components/Divider';
import logo from '../../../assets/logo-light.svg';
import styles from './styles.module.scss';

const BeatriceGau = (): ReactElement => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <img src={logo} alt="Anne Zakka" />
        <div>
          <h1>Béatrice Gau</h1>
        </div>
      </div>
      <Divider />
      <p className={styles.wait}>Page disponible très bientot !</p>
    </div>
  );
};

BeatriceGau.propTypes = {};

export default BeatriceGau;
